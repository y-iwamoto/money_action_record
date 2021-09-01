import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { ProviderSection } from '../components/organisms/ProviderSection';
import { TransitionSection } from '../components/organisms/TransitionSection';
import { LOGIN_ROUTE } from '../navigation/constant';
import { BreadcrumbSection } from '../components/organisms/BreadcrumbSection';
import { AuthScreenNavigationProp } from '../types/navigation';

export const SignUpScreen: React.FC = () => {
  const navigation = useNavigation<AuthScreenNavigationProp>();
  const signUpAction = () => {
    return true;
  };
  const signInNavigation = () => {
    navigation.navigate(LOGIN_ROUTE);
  };

  return (
    <View>
      <BreadcrumbSection/>
      <ProviderSection authAction={signUpAction} headingLabel="会員登録" 
        noteLabel="他サイトへのログインをすることで会員登録が完了します" />
      <TransitionSection  navigation={signInNavigation}
        headingLabel="アカウントをお持ちの方" buttonLabel="ログインする"/>
    </View>
  );
};