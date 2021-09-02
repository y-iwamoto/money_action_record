import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const Link: React.FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
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
