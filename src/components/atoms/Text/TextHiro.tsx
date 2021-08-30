import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

type Props = {
  label: string;
};

export const TextHiro: React.FC<Props> = ({ label }: Props) => {
  return <Text style={styles.label}>{label}</Text>;
};
const styles = StyleSheet.create({
  label: {
    fontSize: wp('4%'),
    padding: 10,
  },
});
