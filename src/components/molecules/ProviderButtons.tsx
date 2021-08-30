import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider } from '../../types/Providertype';
import { ProviderButton } from '../atoms/Button/ProviderButton';

type Props = {
  authAction: (provider: Provider) => void;
};

export const ProviderButtons: React.FC<Props> = ({ authAction }: Props) => {
  return (
    <View style={styles.imageWrapper}>
      <ProviderButton providerType="facebook" title="Facebook" authAction={authAction} />
      <ProviderButton providerType="google" title="Google" authAction={authAction} />
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
