import firebase from 'firebase';

export type Expense = {
  expense_id: string;
  uid: string;
  item_id: string;
  amount: number;
  date: string;
  createdAt: firebase.firestore.Timestamp;
  updatedAt: firebase.firestore.Timestamp;
};

export const initialExpense: Expense = {
  expense_id: '',
  uid: '',
  item_id: '',
  amount: 0,
  date: '',
  createdAt: firebase.firestore.Timestamp.now(),
  updatedAt: firebase.firestore.Timestamp.now(),
};
