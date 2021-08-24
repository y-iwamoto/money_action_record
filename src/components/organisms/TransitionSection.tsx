import React from 'react';
import { View, StyleSheet } from 'react-native';
import { PrimaryButton } from '../atoms/Button/PrimaryButton';
import { HeadingText } from '../atoms/Text/HeadingText';

export const TransitionSection: React.FC = () => {
  return (
    <View style={styles.container}>
      <HeadingText label="アカウントをお持ちでない方" />
      <PrimaryButton label="会員登録はこちら" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: 180,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginHorizontal: 10,
  },
});
