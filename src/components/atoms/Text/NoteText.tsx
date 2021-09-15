import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

type Props = {
  label: string;
};

export const NoteText: React.FC<Props> = ({ label }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp('13%'),
  },
  label: {
    fontSize: wp('3.5%'),
    lineHeight: hp('3%'),
  },
});
