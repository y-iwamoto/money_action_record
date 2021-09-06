import firebase from 'firebase';
import { ENV } from '../environments';
import { HOUSEHOLD_ACCOUNTS_ROUTE, NavigationConst } from '../navigation/constant';
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

export async function userCreatedCheck(
  res: firebase.auth.UserCredential,
): Promise<firebase.firestore.DocumentData | void> {
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

export async function userCreate(
  res: firebase.auth.UserCredential,
): Promise<firebase.firestore.DocumentData | void> {
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
