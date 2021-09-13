import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

type Props = {
  style: { transform: { rotate: string }[] };
  onPressButton: () => void;
};
export const Triangle: React.FC<Props> = ({ style, onPressButton }: Props) => {
  return (
    <View>
      <TouchableOpacity onPress={onPressButton}>
        <View style={[styles.triangle, style]} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: wp('3%'),
    borderRightWidth: wp('3%'),
    borderBottomWidth: wp('6%'),
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#CBD2D9',
  },
});
