import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ChartData } from '../../screens/ChartHouseholdAccountScreen';
import { Line } from '../atoms/Chart/Line';

type Props = {
  data: ChartData;
};
export const ChartHouseholdAccountSection: React.FC<Props> = ({ data }: Props) => {
  return (
    <View style={styles.container}>
      <Line data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  border: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 20,
  },
});
