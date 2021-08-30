import React from 'react';
import { View } from 'react-native';
import { Hiro } from '../components/molecules/Hiro';
import { ProviderSection } from '../components/organisms/ProviderSection';
import { TransitionSection } from '../components/organisms/TransitionSection';
import { signin } from '../libs/firestore';
import { Provider } from '../types/Providertype';

export const LoginScreen: React.FC = () => {
  const signInAction = (provider: Provider) => {
    signin(provider);
  };
  return (
    <View>
      <Hiro />
      <ProviderSection authAction={signInAction} />
      <TransitionSection />
    </View>
  );
};
