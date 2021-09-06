import firebase from 'firebase';

export type User = {
  uid?: string;
  displayName?: string;
  email?: string;
  photoURL?: string;
  providerId?: string;
  createdAt: firebase.firestore.Timestamp;
  updatedAt: firebase.firestore.Timestamp;
};

export const initialUser: User = {
  uid: '',
  displayName: '',
  email: '',
  photoURL: '',
  providerId: '',
  createdAt: firebase.firestore.Timestamp.now(),
  updatedAt: firebase.firestore.Timestamp.now(),
};
