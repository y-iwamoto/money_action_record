import { StackNavigationProp } from '@react-navigation/stack';
import { LOGIN_ROUTE, REGISTER_ACCOUNT_ITEM_ROUTE, SIGN_UP_ROUTE } from '../navigation/constant';

export type RootStackParamList = {
  [LOGIN_ROUTE]: undefined;
  [SIGN_UP_ROUTE]: undefined;
  [REGISTER_ACCOUNT_ITEM_ROUTE]: undefined;
};

export type AuthScreenNavigationProp = StackNavigationProp<RootStackParamList>;
