import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ProviderButton } from '../atoms/Button/ProviderButton';

export const ProviderButtons: React.FC = () => {
  return (
    <View style={styles.imageWrapper}>
      <ProviderButton providerType="facebook" title="Facebook" />
      <ProviderButton providerType="twitter" title="Twitter" />
      <ProviderButton providerType="google" title="Google" />
      <ProviderButton providerType="apple" title="Apple" />
    </View>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
