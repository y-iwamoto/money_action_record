import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import dayjs from 'dayjs';

import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { HouseholdAccountSection } from '../components/organisms/HouseholdAccountSection';
import { ExpensesContext } from '../contexts/expenseContext';
import { ItemsContext } from '../contexts/itemContext';
import { UserContext } from '../contexts/userContext';
import { fetchEachExpenses, fetchItems } from '../libs/firestore';
import { LOGIN_ROUTE, MODAL_ROUTE } from '../navigation/constant';
import { Expense } from '../types/expense';
import { AuthScreenNavigationProp } from '../types/navigation';

export const HouseholdAccountScreen: React.FC = () => {
  const { user } = useContext(UserContext);
  const { items, setItems } = useContext(ItemsContext);
  const { expenses, setExpenses } = useContext(ExpensesContext);
  const isFocused = useIsFocused();

  const [ load, setLoad ] = useState(false);

  const navigation = useNavigation<AuthScreenNavigationProp>();
  const onPressButton = (expense: Expense) => navigation.navigate(MODAL_ROUTE, expense);
  useEffect(() => {
    const isMounted = true;
    const f = async () => {
      setLoad(true);
      if (!user) {
        setLoad(false);
        navigation.navigate(LOGIN_ROUTE);
        return;
      }
      if (isMounted) {
        const items = await fetchItems(user);
        setItems(items);
        const daysYMDArray = [...Array(7)].map((_, i) => dayjs().add(i, 'days').format('YYYY/MM/DD'));
        const expenses = await fetchEachExpenses(user, daysYMDArray, items);
        setExpenses(expenses);
        setLoad(false);
      }
      return () => { isMounted = false; };
    };  
    if (isFocused) {
      f();
    }
  },[isFocused]);

  const component = (!load) ? (<View style={styles.container}><HouseholdAccountSection onPressButton={onPressButton} items={items} expenses={expenses}/></View>) : (<View style={styles.container}><ActivityIndicator size="large" /></View>);

  return component;
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center'
  }
});