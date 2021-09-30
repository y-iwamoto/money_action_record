import firebase from 'firebase';
import { userCreate, userCreatedCheck } from '../libs/firestore';
import {
  HOUSEHOLD_ACCOUNTS_ROUTE,
  LOGIN_ROUTE,
  NavigationConst,
  REGISTER_ACCOUNT_ITEM_ROUTE,
  SIGN_UP_ROUTE,
} from '../navigation/constant';
import { Provider } from '../types/Providertype';
import { authFacebook, googleAuth } from './providerAction';

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
      return { transfer: HOUSEHOLD_ACCOUNTS_ROUTE, user };
    case 'google':
      user = await googleAuth().then(async (res) => {
        if (!res) return;
        return await userCreatedCheck(res);
      });
      if (!user) return { transfer: LOGIN_ROUTE, user: {} };
      return { transfer: HOUSEHOLD_ACCOUNTS_ROUTE, user };
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

export const logout = (): Promise<boolean> => {
  return new Promise((resolve) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        alert('ログアウトしました');
        resolve(true);
      })
      .catch((error: string) => {
        alert(`ログアウト時にエラーが発生しました (${error})`);
        resolve(false);
      });
  });
};

export const authenticated = (): Promise<boolean> => {
  return new Promise((resolve) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
};
