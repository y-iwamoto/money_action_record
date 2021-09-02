import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

type Props = {
  label: string;
  action: () => void;
};

export const PrimaryButton: React.FC<Props> = ({ label, action }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={action}>
        <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#647ACB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    color: '#ffffff',
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('15%'),
    fontSize: wp('5%'),
  },
});
