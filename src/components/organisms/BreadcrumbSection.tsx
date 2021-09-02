import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Breadcrumb } from '../molecules/Breadcrumb';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const BreadcrumbSection: React.FC = () => {
  return (
    <View style={styles.container}>
      <Breadcrumb
        entities={['会員登録', '家計簿項目登録', '利用開始']}
        isTouchable={false}
        flowDepth={0}
        height={30}
        borderRadius={5}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    height: hp('8%'),
    marginTop: hp('2%'),
    marginHorizontal: wp('2%'),
    paddingHorizontal: wp('5%'),
    justifyContent: 'center',
  },
});
