import { StackNavigationProp } from '@react-navigation/stack';
import {
  LOGIN_ROUTE,
  REGISTER_ACCOUNT_ITEM_ROUTE,
  SIGN_UP_ROUTE,
  HOUSEHOLD_ACCOUNTS_ROUTE,
  MODAL_ROUTE,
} from '../navigation/constant';
import { Expense } from './expense';
import { Item } from './item';

export type RootStackParamList = {
  [LOGIN_ROUTE]: undefined;
  [SIGN_UP_ROUTE]: undefined;
  [REGISTER_ACCOUNT_ITEM_ROUTE]: undefined | Item[];
  [HOUSEHOLD_ACCOUNTS_ROUTE]: undefined;
  [MODAL_ROUTE]: Expense;
};

export type AuthScreenNavigationProp = StackNavigationProp<RootStackParamList>;
