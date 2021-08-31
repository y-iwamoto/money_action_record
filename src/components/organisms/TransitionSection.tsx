import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

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
    justifyContent: 'space-around',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: hp('20%'),
    paddingHorizontal: wp('2%'),
    marginVertical: wp('3%'),
    marginHorizontal: hp('2%'),
    paddingBottom: hp('2%'),
  },
});
