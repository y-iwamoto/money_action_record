import firebase from 'firebase';
import * as GoogleAuthentication from 'expo-google-app-auth';
import * as Facebook from 'expo-facebook';
import { ENV } from '../environments';

export const googleAuth = async (): Promise<firebase.auth.UserCredential | null> => {
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
      return Promise.reject({ error: e });
    });
};

export const authFacebook = async (): Promise<firebase.auth.UserCredential | null> => {
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
