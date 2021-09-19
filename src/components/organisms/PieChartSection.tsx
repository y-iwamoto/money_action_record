import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { PieChartData } from '../../screens/ChartHouseholdAccountScreen';

import { Pie } from '../atoms/Chart/Pie';

type Props = {
  data: PieChartData;
};

export const PieChartSection: React.FC<Props> = ({ data }: Props) => {
  const component =
    data.length !== 0 && data.some((d) => d.population !== 0) ? (
      <View style={styles.container}>
        <Pie data={data} />
      </View>
    ) : (
      <View style={styles.container}>
        <View style={styles.border}>
          <Text>家計簿データが指定期間内に登録されていません</Text>
        </View>
      </View>
    );
  return component;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: wp('30%'),
    marginTop: hp('3%'),
  },
  border: {
    borderWidth: 1,
    borderColor: '#707070',
    width: wp('90%'),
    padding: wp('3%'),
  },
});
