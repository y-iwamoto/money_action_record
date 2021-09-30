/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { BaseSyntheticEvent } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
type Props = {
  label: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  action: ((e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>) | (() => void);
};

const PrimaryButton: React.FC<Props> = ({ label, action }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={action}>
        <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default React.memo(PrimaryButton);

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
    width: wp('72%'),
    paddingHorizontal: wp('8%'),
    textAlign: 'center',
    fontSize: wp('5%'),
  },
});
