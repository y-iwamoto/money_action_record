import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  Dimensions,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Provider } from '../../../types/Providertype';

type Props = {
  providerType: Provider;
  title: string;
  authAction: (provider: Provider) => void;
};
const width = Dimensions.get('window').width;

export const ProviderButton: React.FC<Props> = ({ providerType, title, authAction }: Props) => {
  let imageUrl;
  switch (providerType) {
    case 'facebook':
      imageUrl = require('../../../../assets/facebook.png');
      break;
    case 'google':
      imageUrl = require('../../../../assets/google.png');
      break;
  }
  return (
    <TouchableOpacity
      onPress={() => {
        authAction(providerType);
      }}>
      <View style={styles.contaier}>
        <Image source={imageUrl} style={styles.image} />
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const IMAGE_WIDTH = Platform.select({
  ios: wp('11%'),
  android: width > 400 ? wp('11%') : wp('11%'),
});

const IMAGE_HEIGHT = Platform.select({
  ios: hp('5%'),
  android: width > 400 ? hp('6%') : hp('7%'),
});

const styles = StyleSheet.create({
  contaier: {
    height: hp('11%'),
    width: wp('38%'),
    borderRadius: 5,
    borderWidth: 1,
    margin: wp('3%'),
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    color: '#707070',
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    marginLeft: wp('2%'),
  },
  text: {
    marginLeft: wp('2%'),
    fontSize: wp('5%'),
    color: '#707070',
  },
});
