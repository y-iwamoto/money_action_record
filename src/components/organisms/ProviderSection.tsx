import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Provider } from '../../types/Providertype';
import { HeadingText } from '../atoms/Text/HeadingText';
import { ProviderButtons } from '../molecules/ProviderButtons';

type Props = {
  authAction: (provider: Provider) => void;
};

export const ProviderSection: React.FC<Props> = ({ authAction }: Props) => {
  return (
    <View style={styles.container}>
      <HeadingText label="ログイン" />
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
