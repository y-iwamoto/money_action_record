import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { PieChart } from 'react-native-chart-kit';
import { PieChartData } from '../../../screens/ChartHouseholdAccountScreen';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const chartConfig = {
  backgroundGradientFrom: 'black',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: 'black',
  backgroundGradientToOpacity: 0,
  color: () => 'black',
};

type Props = {
  data: PieChartData;
};

const Pie: React.FC<Props> = ({ data }: Props) => {
  return (
    <View style={styles.border}>
      <PieChart
        data={data}
        width={windowWidth * 0.9}
        height={windowHeight / 4}
        chartConfig={chartConfig}
        accessor={'population'}
        backgroundColor={'transparent'}
        paddingLeft={'10'}
      />
    </View>
  );
};
export default React.memo(Pie);

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
  },
});
