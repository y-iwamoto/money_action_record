import React from 'react';
import { Image } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const HeaderIcon: React.FC = () => {
  return (
    <Image
      source={require('../../../../assets/logo.png')}
      style={{ width: wp('10%'), height: hp('5%') }}
    />
  );
};
