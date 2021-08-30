import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { TextHiro } from '../atoms/Text/TextHiro';

export const Hiro: React.FC = () => {
  return (
    <View style={styles.container}>
      <TextHiro label="今度は挫折しない" />
      <TextHiro label="一項目から始められるお手軽家計簿" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    height: hp('14%'),
    marginVertical: hp('2%'),
    marginHorizontal: wp('2%'),
    paddingHorizontal: wp('3%'),
    paddingVertical: hp('5%'),
  },
});
