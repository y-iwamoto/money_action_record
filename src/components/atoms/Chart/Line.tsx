import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { ChartData } from '../../../screens/ChartHouseholdAccountScreen';

const windowWidth = Dimensions.get('window').width;
const chartConfig = {
  backgroundGradientFrom: 'black',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: 'black',
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  barPercentage: 0.5,
  decimalPlaces: 0,
};

type Props = {
  data: ChartData;
};

const Line: React.FC<Props> = ({ data }: Props) => {
  return (
    <View style={styles.border}>
      <LineChart
        data={data}
        width={windowWidth * 0.9}
        height={220}
        chartConfig={chartConfig}
        yAxisSuffix={'円'}
        fromZero={true}
      />
    </View>
  );
};

export default React.memo(Line);
const styles = StyleSheet.create({
  border: {
    borderWidth: 1,
    borderColor: '#707070',
  },
});
