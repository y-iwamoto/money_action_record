import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { TextInput, StyleSheet, View, Text } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const Input: React.FC = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <View>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput style={styles.input} onBlur={onBlur} onChangeText={onChange} value={value} />
        )}
        name="item"
        rules={{ required: 'この項目は必須項目です' }}
        defaultValue=""
      />
      {errors && errors.item && <Text style={styles.error}>{errors.item.message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: wp('1%'),
    marginVertical: hp('2%'),
    height: hp('5%'),
    width: wp('72%'),
  },
  error: {
    color: '#E12D39',
    marginBottom: hp('2%'),
  },
});
