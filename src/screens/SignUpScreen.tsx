import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { ProviderSection } from '../components/organisms/ProviderSection';
import { TransitionSection } from '../components/organisms/TransitionSection';
import { LOGIN_ROUTE } from '../navigation/constant';
import { BreadcrumbSection } from '../components/organisms/BreadcrumbSection';
import { AuthScreenNavigationProp } from '../types/navigation';
import { signup } from '../libs/firestore';
import { userAuthActionHooks } from '../hooks/userAuthActionHooks';

export const SignUpScreen: React.FC = () => {
  const navigation = useNavigation<AuthScreenNavigationProp>();
  const { authAction, navigationAction } = userAuthActionHooks(navigation, signup, LOGIN_ROUTE);

  return (
    <View>
      <BreadcrumbSection/>
      <ProviderSection authAction={authAction} headingLabel="会員登録" 
        noteLabel="他サイトへのログインをすることで会員登録が完了します" />
      <TransitionSection  navigation={navigationAction}
        headingLabel="アカウントをお持ちの方" buttonLabel="ログインする"/>
    </View>
  );
};