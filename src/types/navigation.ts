import { StackNavigationProp } from '@react-navigation/stack';
import { LOGIN_ROUTE, SIGN_UP_ROUTE } from '../navigation/constant';

export type RootStackParamList = {
  [LOGIN_ROUTE]: undefined;
  [SIGN_UP_ROUTE]: undefined;
};

export type AuthScreenNavigationProp = StackNavigationProp<RootStackParamList>;
