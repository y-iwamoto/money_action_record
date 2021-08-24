import React from 'react';
import { View } from 'react-native';
import { Hiro } from '../components/molecules/Hiro';
import { ProviderSection } from '../components/organisms/ProviderSection';
import { TransitionSection } from '../components/organisms/TransitionSection';
export const LoginScreen: React.FC = () => {
  return (
    <View>
      <Hiro />
      <ProviderSection />
      <TransitionSection />
    </View>
  );
};
