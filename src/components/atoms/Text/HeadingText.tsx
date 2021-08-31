import React from 'react';
import { Text, StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

type Props = {
  label: string;
};

export const HeadingText: React.FC<Props> = ({ label }: Props) => {
  return <Text style={styles.label}>{label}</Text>;
};

const styles = StyleSheet.create({
  label: {
    color: '#707070',
    fontSize: wp('5%'),
    paddingTop: hp('3%'),
    paddingBottom: hp('1%'),
    //marginBottom: hp('1%'),
  },
});
