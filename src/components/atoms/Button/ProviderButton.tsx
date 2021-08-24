import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

type Props = {
  providerType: string;
  title: string;
};

export const ProviderButton: React.FC<Props> = ({ providerType, title }: Props) => {
  let imageUrl;
  switch (providerType) {
  case 'facebook':
    imageUrl = require('../../../../assets/facebook.png');
    break;
  case 'twitter':
    imageUrl = require('../../../../assets/twitter.png');
    break;
  case 'google':
    imageUrl = require('../../../../assets/google.png');
    break;
  case 'apple':
    imageUrl = require('../../../../assets/apple.png');
    break;
  }
  return (
    <View style={styles.contaier}>
      <Image source={imageUrl} style={styles.image} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  contaier: {
    height: 80,
    width: 150,
    borderRadius: 5,
    borderWidth: 1,
    margin: 10,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    color: '#707070',
  },
  image: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  text: {
    marginLeft: 10,
    fontSize: 18,
    color: '#707070',
  },
});
