import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { Triangle } from '../atoms/Figure/Triangle';
import { DateFromTo } from '../atoms/Text/DateFromTo';

type Props = {
  onMinnusDayButton: () => void;
  onPlusDayButton: () => void;
  todayDiff: number;
};

export const SearchForm: React.FC<Props> = ({
  onMinnusDayButton,
  onPlusDayButton,
  todayDiff,
}: Props) => {
  return (
    <View style={styles.container}>
      <Triangle style={styles.triangleLeft} onPressButton={onMinnusDayButton} />
      <DateFromTo todayDiff={todayDiff} />
      <Triangle style={styles.triangleRight} onPressButton={onPlusDayButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: wp('5%'),
    height: hp('8%'),
  },
  triangleLeft: {
    transform: [{ rotate: '-90deg' }],
  },
  triangleRight: {
    transform: [{ rotate: '90deg' }],
  },
});
