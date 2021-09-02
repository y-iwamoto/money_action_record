import firebase from 'firebase';
import * as GoogleAuthentication from 'expo-google-app-auth';
import * as Facebook from 'expo-facebook';
import { ENV } from '../environments';
import { Provider } from '../types/Providertype';

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

export const signin = (provider: Provider): void => {
  switch (provider) {
  case 'facebook':
    authFacebook().then(async (res) => {
      if (!res) return;
      await userCreatedCheck(res);
    });
    break;
  case 'google':
    googleAuth().then(async (res) => {
      if (!res) return;
      await userCreatedCheck(res);
    });
    break;
  }
};

export const signup = (provider: Provider): void => {
  switch (provider) {
  case 'facebook':
    authFacebook().then(async (res): Promise<void> => {
      if (!res) return;
      await userCreate(res);
    });
    break;
  case 'google':
    googleAuth().then(async (res): Promise<void> => {
      if (!res) return;
      await userCreate(res);
    });
    break;
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
    }
  } catch (e) {
    alert('エラーです');
  }
}

async function userCreate(res: firebase.auth.UserCredential) {
  const user = res.user;
  if (!user) return;
  try {
    const userDoc = user
      ? await firebase.firestore().collection('users').doc(user.uid).get()
      : null;
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
      alert('ユーザ登録に成功しました');
    } else {
      alert('ユーザ登録が済みです');
    }
  } catch (error) {
    alert('ユーザ登録に失敗しました');
  }
}
