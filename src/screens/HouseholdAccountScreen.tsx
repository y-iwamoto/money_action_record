import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import dayjs from 'dayjs';

import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { HouseholdAccountSection } from '../components/organisms/HouseholdAccountSection';
import { ExpensesContext } from '../contexts/expenseContext';
import { ItemsContext } from '../contexts/itemContext';
import { UserContext } from '../contexts/userContext';
import { fetchEachExpenses, fetchItems } from '../libs/firestore';
import { LOGIN_ROUTE, MODAL_ROUTE, REGISTER_ACCOUNT_ITEM_ROUTE } from '../navigation/constant';
import { Expense } from '../types/expense';
import { AuthScreenNavigationProp } from '../types/navigation';
import { SearchSection } from '../components/organisms/SearchSection';

export const HouseholdAccountScreen: React.FC = () => {
  const { user } = useContext(UserContext);
  const { items, setItems } = useContext(ItemsContext);
  const { expenses, setExpenses } = useContext(ExpensesContext);
  const isFocused = useIsFocused();

  const [load, setLoad] = useState(false);
  const [todayDiff, setTodayDiff] = useState(0);

  const navigation = useNavigation<AuthScreenNavigationProp>();
  const onPressButton = (expense: Expense) => navigation.navigate(MODAL_ROUTE, expense);
  const onItemButton = () => navigation.navigate(REGISTER_ACCOUNT_ITEM_ROUTE, items);
  const onMinnusDayButton = (todayDiff: number) => {
    setTodayDiff(todayDiff - 7);
  };
  const onPlusDayButton = (todayDiff: number) => {
    setTodayDiff(todayDiff + 7);
  };

  useEffect(() => {
    let isMounted = true;
    const f = async () => {
      setLoad(true);
      if (!user) {
        setLoad(false);
        navigation.navigate(LOGIN_ROUTE);
        return;
      }
      if (isMounted) {
        const items = await fetchItems(user);
        const itemsArray = items ? items : [];
        console.warn('itemsArray', itemsArray);
        setItems(itemsArray);
        const daysYMDArray = [...Array(7)].map((_, i) => {
          if (todayDiff > -1) {
            return dayjs()
              .subtract(i - todayDiff, 'days')
              .format('YYYY/MM/DD');
          } else {
            return dayjs()
              .add(i + todayDiff, 'days')
              .format('YYYY/MM/DD');
          }
        });
        const expenses = await fetchEachExpenses(user, daysYMDArray, itemsArray);
        console.warn('expenses', expenses);
        setExpenses(expenses);
        setLoad(false);
      }
      return () => {
        isMounted = false;
      };
    };
    if (isFocused) {
      f();
    }
  }, [isFocused, navigation, setExpenses, setItems, user, todayDiff]);

  const component = !load ? (
    <View style={styles.container}>
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
      <ActivityIndicator size="large" />
    </View>
  );

  return component;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
