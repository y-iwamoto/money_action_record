import { AuthScreenNavigationProp } from '../types/navigation';
import { Provider } from '../types/Providertype';
import { NavigationConst } from '../navigation/constant';

export type Resopnse = {
  signInAction: (provider: Provider) => void;
  signUpNavigation: () => void;
};
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function userAuthActionHooks(
  navigation: AuthScreenNavigationProp,
  action: (provider: Provider) => Promise<NavigationConst>,
  navigation_const: NavigationConst,
) {
  const authAction = (provider: Provider) => {
    action(provider).then((transfer: NavigationConst) => {
      navigation.navigate(transfer);
    });
  };
  const navigationAction = () => {
    navigation.navigate(navigation_const);
  };
  return { authAction, navigationAction } as const;
}
