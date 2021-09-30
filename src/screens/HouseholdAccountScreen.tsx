import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';

import { View, StyleSheet, ActivityIndicator } from 'react-native';
import HouseholdAccountSection from '../components/organisms/HouseholdAccountSection';
import { ExpensesContext } from '../contexts/expenseContext';
import { ItemsContext } from '../contexts/itemContext';
import { UserContext } from '../contexts/userContext';
import { MODAL_ROUTE } from '../navigation/constant';
import { Expense } from '../types/expense';
import { AuthScreenNavigationProp } from '../types/navigation';
import SearchSection from '../components/organisms/SearchSection';
import { UseFetchCommonInfoHook } from '../hooks/userFetchCommonInfoHook';
import { UseSearchSectionHook } from '../hooks/useSearchSectionHook';

const HouseholdAccountScreen: React.FC = () => {
  const { user } = useContext(UserContext);
  const { items, setItems } = useContext(ItemsContext);
  const { expenses, setExpenses } = useContext(ExpensesContext);
  const isFocused = useIsFocused();

  const [load, setLoad] = useState(false);
  const [todayDiff, setTodayDiff] = useState(0);

  const navigation = useNavigation<AuthScreenNavigationProp>();
  const onPressButton = React.useCallback(
    (expense: Expense) => navigation.navigate(MODAL_ROUTE, expense),
    [navigation],
  );

  const { onItemButton, onMinnusDayButton, onPlusDayButton } = UseSearchSectionHook(
    navigation,
    items,
    setTodayDiff,
  );

  UseFetchCommonInfoHook(setLoad, user, navigation, setItems, todayDiff, setExpenses, isFocused);

  const component = !load ? (
    <View>
      <SearchSection
        onItemButton={onItemButton}
        onMinnusDayButton={() => onMinnusDayButton(todayDiff)}
        onPlusDayButton={() => onPlusDayButton(todayDiff)}
        todayDiff={todayDiff}
      />
      <HouseholdAccountSection
        onPressButton={onPressButton}
        items={items}
        expenses={expenses}
        todayDiff={todayDiff}
      />
    </View>
  ) : (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#7CC4FA" />
    </View>
  );

  return component;
};

export default React.memo(HouseholdAccountScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
