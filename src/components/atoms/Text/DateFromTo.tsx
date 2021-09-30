import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import dayjs from 'dayjs';

type Props = {
  todayDiff: number;
};

const DateFromTo: React.FC<Props> = ({ todayDiff }: Props) => {
  const FromDay = dayjs()
    .add(0 + todayDiff, 'days')
    .format('YYYY/MM/DD');
  const ToDay = dayjs()
    .add(6 + todayDiff, 'days')
    .format('YYYY/MM/DD');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{FromDay}</Text>
      <Text style={styles.text}>〜</Text>
      <Text style={styles.text}>{ToDay}</Text>
    </View>
  );
};
export default React.memo(DateFromTo);
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: wp('4%'),
  },
  text: {
    marginHorizontal: wp('2%'),
    fontSize: wp('4%'),
  },
});
