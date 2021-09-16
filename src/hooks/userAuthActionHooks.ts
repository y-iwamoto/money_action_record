import firebase from 'firebase';
import { AuthScreenNavigationProp } from '../types/navigation';
import { Provider } from '../types/Providertype';
import { NavigationConst } from '../navigation/constant';
import { User } from '../types/user';

export type Resopnse = {
  signInAction: (provider: Provider) => void;
  signUpNavigation: () => void;
};

export type actionResponse = {
  transfer: NavigationConst;
  user: firebase.firestore.DocumentData;
};
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function userAuthActionHooks(
  navigation: AuthScreenNavigationProp,
  action: (provider: Provider) => Promise<actionResponse>,
  navigation_const: NavigationConst,
  setUser: (user: User) => void,
) {
  const authAction = (provider: Provider) => {
    action(provider).then(({ user }: actionResponse) => {
      if (!user) return;
      setUser({ ...user, createdAt: user.createdAt, updatedAt: user.updatedAt });
    });
  };
  const navigationAction = () => {
    navigation.navigate(navigation_const);
  };
  return { authAction, navigationAction } as const;
}
