import React from 'react';
import { View, StyleSheet } from 'react-native';
import { HeadingText } from '../atoms/Text/HeadingText';
import { ProviderButtons } from '../molecules/ProviderButtons';

export const ProviderSection: React.FC = () => {
  return (
    <View style={styles.container}>
      <HeadingText label="ログイン" />
      <ProviderButtons />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: 300,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginHorizontal: 10,
  },
});
