import React, { memo, useMemo } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { PieChartData } from '../../screens/ChartHouseholdAccountScreen';

import Pie from '../atoms/Chart/Pie';

type Props = {
  data: PieChartData;
};

function getComponent(
  data: {
    name: string;
    population: number;
    color: string;
    strokeWidth: number;
    legendFontColor: string;
    legendFontSize: number;
  }[],
) {
  return data.length !== 0 && data.some((d) => d.population !== 0) ? (
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
}

const PieChartSection: React.FC<Props> = ({ data }: Props) => {
  const component = useMemo(() => getComponent(data), [data]);
  return component;
};

export default memo(PieChartSection);

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
