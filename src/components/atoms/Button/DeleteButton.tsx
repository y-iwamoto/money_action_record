/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { BaseSyntheticEvent } from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
type Props = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  action: ((e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>) | (() => void);
};

export const DeleteButton: React.FC<Props> = ({ action }: Props) => {
  return (
    <TouchableOpacity onPress={action}>
      <Image source={require('../../../../assets/trash.png')} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    paddingVertical: hp('2%'),
    width: wp('72%'),
    paddingHorizontal: wp('8%'),
    textAlign: 'center',
    fontSize: wp('5%'),
  },
  image: {
    width: wp('5%'),
    height: hp('3%'),
  },
});
