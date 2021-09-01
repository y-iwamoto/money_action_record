import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { Hiro } from '../components/molecules/Hiro';
import { ProviderSection } from '../components/organisms/ProviderSection';
import { TransitionSection } from '../components/organisms/TransitionSection';
import { signin } from '../libs/firestore';
import { SIGN_UP_ROUTE } from '../navigation/constant';
import { AuthScreenNavigationProp } from '../types/navigation';
import { Provider } from '../types/Providertype';

export const LoginScreen: React.FC = () => {
  const navigation = useNavigation<AuthScreenNavigationProp>();
  const signInAction = (provider: Provider) => {
    signin(provider);
  };
  const signUpNavigation = () => {
    navigation.navigate(SIGN_UP_ROUTE);
  };
  
  return (
    <View>
      <Hiro />
      <ProviderSection authAction={signInAction} headingLabel="ログイン" noteLabel={null}/>
      <TransitionSection navigation={signUpNavigation}
        headingLabel="アカウントをお持ちでない方" buttonLabel="会員登録はこちら" />
    </View>
  );
};
