import React from 'react';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';
import { TextInput, StyleSheet, View, Text, ScrollView } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { DeleteButton } from '../Button/DeleteButton';
import { Link } from '../Text/Link';

export const Inputs: React.FC = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items',
  });
  return (
    <View style={styles.container}>
      <ScrollView>
        {fields.map((item, index) => (
          <View key={index}>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <View style={styles.input_container}>
                  <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                  <DeleteButton action={() => remove(index)} />
                </View>
              )}
              name={`items[${index}].item`}
              rules={{ required: 'この項目は必須項目です' }}
            />

            {errors && errors.items && errors.items[index] && (
              <Text style={styles.error}>{errors.items[index].item.message}</Text>
            )}
          </View>
        ))}
        <Link append={append} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp('13%'),
  },
  input_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderRadius: wp('1%'),
    marginVertical: hp('2%'),
    height: hp('5%'),
    width: wp('60%'),
  },
  error: {
    color: '#E12D39',
    marginBottom: hp('2%'),
  },
});
