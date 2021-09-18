import React from 'react';
import { View, StyleSheet } from 'react-native';
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
  return (
    <View style={styles.container}>
      <Pie data={data} />
    </View>
  );
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
});
