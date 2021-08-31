import {
  FIREBASE_API_KEY_DEV,
  FIREBASE_AUTH_DOMAIN_DEV,
  FIREBASE_PROJECT_ID_DEV,
  FIREBASE_STRORAGE_BUCKET_DEV,
  FIREBASE_MESSAGING_SENDER_ID_DEV,
  FIREBASE_APP_ID,
  GOOGLE_ANDROID_CLIENT_ID_DEV,
  GOOGLE_IOS_CLIENT_ID_DEV,
  FACEBOOK_APP_ID_DEV,
  LOAD_STORYBOOK,
} from '@env';
import Constants from 'expo-constants';
const ENVs = {
  dev: {
    // 開発環境の変数
    environment: 'dev',
    firebase_api_key: FIREBASE_API_KEY_DEV,
    firebase_auth_domain: FIREBASE_AUTH_DOMAIN_DEV,
    firebase_project_id: FIREBASE_PROJECT_ID_DEV,
    firebase_storage_bucket: FIREBASE_STRORAGE_BUCKET_DEV,
    firebase_messaging_sender_id: FIREBASE_MESSAGING_SENDER_ID_DEV,
    firebase_app_id: FIREBASE_APP_ID,
    google_android_client_id: GOOGLE_ANDROID_CLIENT_ID_DEV,
    google_ios_client_id: GOOGLE_IOS_CLIENT_ID_DEV,
    facebook_app_id: FACEBOOK_APP_ID_DEV,
    load_storybook: LOAD_STORYBOOK,
  },
  production: {
    // 本番環境の変数
    environment: 'production',
    firebase_api_key: 'dummy',
    firebase_auth_domain: 'dummy',
    firebase_project_id: 'dummy',
    firebase_storage_bucket: 'dummy',
    firebase_messaging_sender_id: 'dummy',
    firebase_app_id: 'dummy',
    google_android_client_id: 'dummy',
    google_ios_client_id: 'dummy',
    facebook_app_id: 'dummy',
    load_storybook: false,
  },
};

function getEnvVars() {
  const options = Constants.manifest ? Constants.manifest.packagerOpts : null;
  const channel = Constants.manifest ? Constants.manifest.releaseChannel : null;
  const isDev = options != null ? options.dev : true;
  if (isDev) {
    return ENVs.dev;
  } else {
    if (channel === 'production') {
      return ENVs.production;
    } else {
      return ENVs.dev;
    }
  }
}

export const ENV = getEnvVars();
