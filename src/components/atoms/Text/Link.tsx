import React from 'react';
import { FieldArrayMethodProps } from 'react-hook-form';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
type Props = {
  append: (
    value: Partial<unknown> | Partial<unknown>[],
    options?: FieldArrayMethodProps | undefined,
  ) => void;
};
export const Link: React.FC<Props> = ({ append }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => append({ item: '' })}>
        <Text style={styles.text}>項目を増やす</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    marginBottom: hp('2%'),
    width: wp('72%'),
  },
  text: {
    color: '#40C3F7',
    fontSize: wp('3%'),
  },
});
