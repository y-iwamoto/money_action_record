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
export const signin = (provider: Provider): void => {
  switch (provider) {
  case 'facebook':
    authFacebook();
    break;
  case 'google':
    googleAuth();
    break;
  }
};
// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

function googleAuth() {
  GoogleAuthentication.logInAsync({
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
      return Promise.reject();
      // ...
    })
    .catch((error) => {
      console.error('error', error);
    });
}

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

      const userCredential = await firebase
        .auth()
        .signInWithCredential(credential)
        .catch((error) => {
          console.log(error);
        });
      return userCredential;
    } else {
      return { cancelled: true };
    }
  } catch (e) {
    return { error: true };
  }
};
