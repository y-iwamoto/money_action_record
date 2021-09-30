import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import PrimaryButton from '../atoms/Button/PrimaryButton';

import SearchForm from '../molecules/SearchForm';

type Props = {
  onItemButton: () => void;
  onMinnusDayButton: () => void;
  onPlusDayButton: () => void;
  todayDiff: number;
};

const SearchSection: React.FC<Props> = ({
  onItemButton,
  onMinnusDayButton,
  onPlusDayButton,
  todayDiff,
}: Props) => {
  return (
    <View style={styles.container}>
      <SearchForm
        onMinnusDayButton={onMinnusDayButton}
        onPlusDayButton={onPlusDayButton}
        todayDiff={todayDiff}
      />
      <PrimaryButton label="項目設定" action={onItemButton} />
    </View>
  );
};
export default React.memo(SearchSection);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 1,
    marginHorizontal: wp('5%'),
    marginTop: hp('3%'),
    padding: hp('2%'),
  },
});
