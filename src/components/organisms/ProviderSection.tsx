import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Provider } from '../../types/Providertype';
import { HeadingText } from '../atoms/Text/HeadingText';
import { NoteText } from '../atoms/Text/NoteText';
import { ProviderButtons } from '../molecules/ProviderButtons';

type Props = {
  authAction: (provider: Provider) => void;
  headingLabel: string;
  noteLabel: string | null;
};

export const ProviderSection: React.FC<Props> = ({ authAction, headingLabel, noteLabel }: Props) => {

  return (
    <View style={noteLabel ? [styles.container, {height: hp('30%')}] : [styles.container]}>
      <HeadingText label={headingLabel} />
      {noteLabel ? <NoteText label={noteLabel} /> : null}
      <ProviderButtons authAction={authAction} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: hp('25%'),
    paddingHorizontal: wp('3%'),
    marginVertical: hp('2%'),
    marginHorizontal: wp('2%'),
  },
});
