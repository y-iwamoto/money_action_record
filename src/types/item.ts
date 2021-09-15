import firebase from 'firebase';

export type Item = {
  name: string;
  item_id: string;
  createdAt: firebase.firestore.Timestamp;
  updatedAt: firebase.firestore.Timestamp;
};

export const initialItem: Item = {
  name: '',
  item_id: '',
  createdAt: firebase.firestore.Timestamp.now(),
  updatedAt: firebase.firestore.Timestamp.now(),
};
