/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { BaseSyntheticEvent } from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import { View, StyleSheet } from 'react-native';
import PrimaryButton from '../atoms/Button/PrimaryButton';
import { HeadingText } from '../atoms/Text/HeadingText';
import { NoteText } from '../atoms/Text/NoteText';
import { Inputs } from '../atoms/Form/Inputs';

type Props = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  onSubmit: (e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
};
export const FormSection: React.FC<Props> = ({ onSubmit }: Props) => {
  return (
    <View style={styles.container}>
      <HeadingText label="家計簿項目登録" />
      <NoteText label="家計簿で記録していきたい項目を追加しましょう" />
      <Inputs />
      <PrimaryButton label="項目登録を完了する" action={onSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: hp('40%'),
    paddingHorizontal: wp('3%'),
    marginVertical: hp('2%'),
    marginHorizontal: wp('2%'),
    paddingBottom: hp('3%'),
  },
});
