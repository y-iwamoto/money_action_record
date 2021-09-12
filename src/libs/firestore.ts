import firebase from 'firebase';
import { ENV } from '../environments';
import { HOUSEHOLD_ACCOUNTS_ROUTE, NavigationConst } from '../navigation/constant';
import { Expense, initialExpense } from '../types/expense';
import { Item } from '../types/item';
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
  req: { items: Item[] },
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
    const itemReferece = db.collection('users').doc(uid).collection('items');
    req.items.forEach((value: Item) => {
      if (!value.item_id) {
        batch.set(itemReferece.doc(), {
          name: value.name,
          createdAt: currentTime,
          updatedAt: currentTime,
        });
      } else {
        const itemDoc = itemReferece.doc(value.item_id);
        batch.update(itemDoc, {
          name: value.name,
          createdAt: currentTime,
          updatedAt: currentTime,
        });
      }
    });
    await batch.commit();
    alert('家計簿項目の登録完了');
    return HOUSEHOLD_ACCOUNTS_ROUTE;
  } catch (e) {
    alert('家計簿項目の登録エラー');
  }
};

export const fetchItems = async (user: User): Promise<Item[] | void> => {
  const db = firebase.firestore();
  const query = user
    ? db.collection('users').doc(user.uid).collection('items').orderBy('createdAt', 'desc')
    : null;
  if (!query) return;
  const querySnapshot = await query.get();
  const items = querySnapshot.docs.map((doc) => {
    return doc.data() as Item;
  });
  return items;
};

export const fetchEachExpenses = async (
  user: User,
  daysArray: string[],
  itemsArray: Item[],
): Promise<Expense[][] | []> => {
  try {
    const db = firebase.firestore();
    const daysMap = await Promise.all(
      daysArray.map(async (day) => {
        const itemMap = await Promise.all(
          itemsArray.map(async (item) => {
            const querySnapshot = user
              ? await db
                  .collection('users')
                  .doc(user.uid)
                  .collection('items')
                  .doc(item.item_id)
                  .collection('expenses')
                  .where('date', '==', day)
                  .where('item_id', '==', item.item_id)
                  .get()
              : null;
            let expense: Expense = initialExpense;
            if (querySnapshot) {
              querySnapshot.forEach(async (doc) => {
                if (doc.data().item_id === item.item_id && doc.data().date === day) {
                  expense = doc.data() as Expense;
                }
              });
            }
            return expense && expense.amount
              ? expense
              : Object.assign(
                  {
                    expense_id: '',
                    uid: '',
                    item_id: '',
                    amount: 0,
                    date: '',
                    createdAt: firebase.firestore.Timestamp.now(),
                    updatedAt: firebase.firestore.Timestamp.now(),
                  },
                  {
                    item_id: item.item_id,
                    date: day,
                    uid: user.uid,
                    createdAt: Date.now(),
                    updatedAt: Date.now(),
                  },
                );
          }),
        );
        return itemMap;
      }),
    );
    return daysMap;
  } catch (e) {
    alert('エラーです');
    return [];
  }
};

export const saveExpense = async (request: Expense): Promise<boolean> => {
  const db = firebase.firestore();
  try {
    const rec = db
      .collection('users')
      .doc(request.uid)
      .collection('items')
      .doc(request.item_id)
      .collection('expenses');
    if (request.expense_id) {
      await rec.doc(request.expense_id).set(request);
      alert('更新しました');
      return true;
    } else {
      await rec.doc().set(request);
      await saveExpenseId(request);
      alert('登録しました');
      return true;
    }
  } catch (e) {
    alert('エラーです');
    return false;
  }
};
export const saveExpenseId = async (request: Expense): Promise<void> => {
  const db = firebase.firestore();
  try {
    const querySnapshot = await db
      .collection('users')
      .doc(request.uid)
      .collection('items')
      .doc(request.item_id)
      .collection('expenses')
      .where('date', '==', request.date)
      .where('item_id', '==', request.item_id)
      .get();
    for (const doc of querySnapshot.docs) {
      if (!doc.data().expense_id) {
        await db
          .collection('users')
          .doc(request.uid)
          .collection('items')
          .doc(request.item_id)
          .collection('expenses')
          .doc(doc.id)
          .update({
            expense_id: doc.id,
          });
      }
    }
  } catch (e) {
    alert('エラーです');
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
