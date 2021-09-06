import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { View } from 'react-native';
import { Hiro } from '../components/molecules/Hiro';
import { ProviderSection } from '../components/organisms/ProviderSection';
import { TransitionSection } from '../components/organisms/TransitionSection';
import { UserContext } from '../contexts/userContext';
import { userAuthActionHooks } from '../hooks/userAuthActionHooks';
import { signin } from '../libs/firestore';
import { SIGN_UP_ROUTE } from '../navigation/constant';
import { AuthScreenNavigationProp } from '../types/navigation';

export const LoginScreen: React.FC = () => {
  const navigation = useNavigation<AuthScreenNavigationProp>();
  const { setUser } = useContext(UserContext);
  const { authAction, navigationAction } = userAuthActionHooks(
    navigation,
    signin,
    SIGN_UP_ROUTE,
    setUser,
  );

  return (
    <View>
      <Hiro />
      <ProviderSection authAction={authAction} headingLabel="ログイン" noteLabel={null} />
      <TransitionSection
        navigation={navigationAction}
        headingLabel="アカウントをお持ちでない方"
        buttonLabel="会員登録はこちら"
      />
    </View>
  );
};
