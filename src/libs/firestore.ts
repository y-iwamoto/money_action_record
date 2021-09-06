import firebase from 'firebase';
import * as GoogleAuthentication from 'expo-google-app-auth';
import * as Facebook from 'expo-facebook';
import { ENV } from '../environments';
import { Provider } from '../types/Providertype';
import {
  HOUSEHOLD_ACCOUNTS_ROUTE,
  LOGIN_ROUTE,
  NavigationConst,
  REGISTER_ACCOUNT_ITEM_ROUTE,
  SIGN_UP_ROUTE,
} from '../navigation/constant';
import { Item, RegusterAccountItemFormData } from '../screens/RegisterAccountItemScreen';
import { User } from '../types/user';

const firebaseConfig = {
  apiKey: ENV.firebase_api_key,
  authDomain: ENV.firebase_auth_domain,
  projectId: ENV.firebase_project_id,
  storageBucket: ENV.firebase_storage_bucket,
  messagingSenderId: ENV.firebase_messaging_sender_id,
  appId: ENV.firebase_app_id,
};
// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export const signin = async (
  provider: Provider,
): Promise<{
  transfer: NavigationConst;
  user: firebase.firestore.DocumentData;
}> => {
  let user = null;
  try {
    switch (provider) {
    case 'facebook':
      user = await authFacebook().then(async (res) => {
        if (!res) return;
        return await userCreatedCheck(res);
      });
      if (!user) return { transfer: LOGIN_ROUTE, user: {} };
      return { transfer: REGISTER_ACCOUNT_ITEM_ROUTE, user };
    case 'google':
      user = await googleAuth().then(async (res) => {
        if (!res) return;
        return await userCreatedCheck(res);
      });
      if (!user) return { transfer: LOGIN_ROUTE, user: {} };
      return { transfer: REGISTER_ACCOUNT_ITEM_ROUTE, user };
    }
  } catch (e) {
    alert('ログイン処理に失敗しました');
    return { transfer: LOGIN_ROUTE, user: {} };
  }
};

export const signup = async (
  provider: Provider,
): Promise<{
  transfer: NavigationConst;
  user: firebase.firestore.DocumentData;
}> => {
  let user = null;
  try {
    switch (provider) {
    case 'facebook':
      user = await authFacebook().then(async (res) => {
        if (!res) return;
        return await userCreate(res);
      });
      if (!user) return { transfer: SIGN_UP_ROUTE, user: {} };
      return { transfer: REGISTER_ACCOUNT_ITEM_ROUTE, user };
    case 'google':
      user = await googleAuth().then(async (res) => {
        if (!res) return;
        return await userCreate(res);
      });
      if (!user) return { transfer: SIGN_UP_ROUTE, user: {} };
      return { transfer: REGISTER_ACCOUNT_ITEM_ROUTE, user };
    }
  } catch (e) {
    alert('登録処理に失敗しました');
    return { transfer: SIGN_UP_ROUTE, user: {} };
  }
};

export const saveItems = async (
  req: RegusterAccountItemFormData,
  user?: User | null,
): Promise<NavigationConst | void> => {
  const db = firebase.firestore();
  const batch = db.batch();
  const date = new Date();
  const currentTime = date.getTime();
  if (!user) {
    alert('家計簿項目の登録エラー');
    return;
  }
  const uid = user.uid;
  try {
    const itemReferece = await db.collection('users').doc(uid).collection('items');
    req.items.forEach(async (doc: Item) => {
      if (!doc.item_id) {
        batch.set(itemReferece.doc(), {
          name: doc.item,
          createdAt: currentTime,
          updatedAt: currentTime,
        });
      } else {
        const itemDoc = await itemReferece.doc(doc.item_id);
        batch.update(itemDoc, {
          name: doc.item,
          createdAt: currentTime,
          updatedAt: currentTime,
        });
      }
    });
    await batch.commit();
    alert('家計簿項目の登録完了');
    return HOUSEHOLD_ACCOUNTS_ROUTE;
  } catch (e) {
    console.error('error', e);
    alert('家計簿項目の登録エラー');
  }
};

const googleAuth = async () => {
  return await GoogleAuthentication.logInAsync({
    androidClientId: ENV.google_android_client_id,
    iosClientId: ENV.google_ios_client_id,
    scopes: ['profile', 'email'],
  })
    .then((result) => {
      if (result.type === 'success') {
        const { idToken, accessToken } = result;
        const credential = firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);
        return firebase.auth().signInWithCredential(credential);
      }
      return null;
    })
    .catch((e) => {
      alert('エラーです');
      return Promise.reject({ error: e });
    });
};

const authFacebook = async () => {
  try {
    await Facebook.initializeAsync({
      appId: ENV.facebook_app_id,
    });
    const res = await Facebook.logInWithReadPermissionsAsync({
      permissions: ['public_profile'],
    });
    if (res.type === 'success') {
      const credential = firebase.auth.FacebookAuthProvider.credential(res.token);

      const userCredential = await firebase.auth().signInWithCredential(credential);
      return userCredential;
    } else {
      return null;
    }
  } catch (e) {
    alert('エラーです');
    return Promise.reject({ error: e });
  }
};
async function userCreatedCheck(res: firebase.auth.UserCredential) {
  const user = res.user;
  try {
    const userDoc = user
      ? await firebase.firestore().collection('users').doc(user.uid).get()
      : null;
    if (!userDoc || !userDoc.exists) {
      alert('ユーザ登録が済んでいません');
    } else {
      alert('ユーザログイン');
      return userDoc.data();
    }
  } catch (e) {
    alert('エラーです');
  }
}

async function userCreate(res: firebase.auth.UserCredential) {
  const user = res.user;
  if (!user) return;
  try {
    let userDoc = user ? await firebase.firestore().collection('users').doc(user.uid).get() : null;
    if (user && (!userDoc || !userDoc.exists)) {
      await firebase
        .firestore()
        .collection('users')
        .doc(user.uid)
        .set({
          displayName: user.displayName ? user.displayName : null,
          email: user.email ? user.email : null,
          photoURL: user.photoURL ? user.photoURL : null,
          providerId: user.providerId ? user.providerId : null,
          uid: user.uid,
          createdAt: Date.now(),
          updatedAt: Date.now(),
        });
      userDoc = await firebase.firestore().collection('users').doc(user.uid).get();
      const userData = userDoc.data();
      alert('ユーザ登録に成功しました');
      return userData;
    } else {
      alert('ユーザ登録が済みです');
    }
  } catch (error) {
    alert('ユーザ登録に失敗しました');
  }
}
