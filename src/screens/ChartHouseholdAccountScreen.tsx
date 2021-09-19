import { useIsFocused, useNavigation } from '@react-navigation/native';
import dayjs from 'dayjs';
import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { ChartHouseholdAccountSection } from '../components/organisms/ChartHouseholdAccountSection';
import { PieChartSection } from '../components/organisms/PieChartSection';
import { SearchSection } from '../components/organisms/SearchSection';
import { ExpensesContext } from '../contexts/expenseContext';
import { ItemsContext } from '../contexts/itemContext';
import { UserContext } from '../contexts/userContext';
import { fetchEachExpenses, fetchItems } from '../libs/firestore';
import {
  LOGIN_ROUTE,
  REGISTER_ACCOUNT_ITEM_ROUTE,
  SET_ACCOUNT_ITEM_ROUTE,
} from '../navigation/constant';
import { AuthScreenNavigationProp } from '../types/navigation';

const COLOR = [
  'rgba(0, 33, 89, 1)',
  'rgba(3, 68, 158, 1)',
  'rgba(9, 103, 210, 1)',
  'rgba(33, 134, 235, 1)',
  'rgba(71, 163, 243, 1)',
  'rgba(124, 196, 250, 1)',
];

export type ChartData = {
  labels: string[];
  datasets: { data: number[]; color: () => string; strokeWidth: number }[];
  legend: string[];
};

export type PieChartData = {
  name: string;
  population: number;
  color: string;
  strokeWidth: number;
  legendFontColor: string;
  legendFontSize: number;
}[];

export const ChartHouseholdAccountScreen: React.FC = () => {
  const { user } = useContext(UserContext);
  const { items, setItems } = useContext(ItemsContext);
  const { setExpenses } = useContext(ExpensesContext);
  const navigation = useNavigation<AuthScreenNavigationProp>();
  const isFocused = useIsFocused();
  const onItemButton = () => navigation.navigate(SET_ACCOUNT_ITEM_ROUTE, items);
  const onMinnusDayButton = (todayDiff: number) => {
    setTodayDiff(todayDiff - 7);
  };
  const onPlusDayButton = (todayDiff: number) => {
    setTodayDiff(todayDiff + 7);
  };

  const [load, setLoad] = useState(false);
  const [todayDiff, setTodayDiff] = useState(0);
  // New start
  const [chartData, setChartData] = useState<ChartData>();
  const [pieChartData, setPieChartData] = useState<PieChartData>();
  // New end

  useEffect(() => {
    let isMounted = true;
    const f = async () => {
      if (isMounted) {
        if (isMounted) setLoad(true);
        if (!user) {
          if (isMounted) setLoad(false);
          navigation.navigate(LOGIN_ROUTE);
          return;
        }
        const items = await fetchItems(user);
        if (!items || items.length === 0) {
          navigation.navigate(REGISTER_ACCOUNT_ITEM_ROUTE);
          return;
        }
        const itemsArray = items ? items : [];
        if (isMounted) setItems(itemsArray);
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
        if (isMounted) {
          setExpenses(expenses);
          setLoad(false);
          // New start
          const labels: string[] = [...Array(7)].map((_, i) => {
            if (todayDiff > -1) {
              return dayjs()
                .subtract(i - todayDiff, 'days')
                .format('MM/DD');
            } else {
              return dayjs()
                .add(i + todayDiff, 'days')
                .format('MM/DD');
            }
          });
          const color = items ? items.map((_, i) => () => COLOR[i]) : [];
          const data = items
            ? items.map((_, i) => labels.map((_, j) => Number(expenses[j][i].amount)))
            : [];
          const datasets = items
            ? items.map((_, i) => ({ data: data[i], color: color[i], strokeWidth: 2 }))
            : [];
          const legend = items ? items.map((item) => item.name) : [];
          setChartData({ labels: labels, datasets: datasets, legend: legend });

          const dataAccumulate = data.map((d) => d.reduce((sum, element) => sum + element));
          const dataAccumulateSets = items
            ? items.map((item, i) => ({
                name: item.name,
                population: dataAccumulate[i],
                color: COLOR[i],
                strokeWidth: 2,
                legendFontColor: '#7F7F7F',
                legendFontSize: 15,
              }))
            : [];
          setPieChartData(dataAccumulateSets);
          // New end
        }
      }
    };
    if (isFocused) {
      f();
    }
    return () => {
      isMounted = false;
    };
  }, [isFocused, navigation, setExpenses, setItems, user, todayDiff]);

  const component =
    !chartData || !pieChartData || load ? (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#7CC4FA" />
      </View>
    ) : (
      <ScrollView style={styles.scroll_container}>
        <SearchSection
          onItemButton={onItemButton}
          onMinnusDayButton={() => onMinnusDayButton(todayDiff)}
          onPlusDayButton={() => onPlusDayButton(todayDiff)}
          todayDiff={todayDiff}
        />
        <ChartHouseholdAccountSection data={chartData} />
        <PieChartSection data={pieChartData} />
      </ScrollView>
    );

  return component;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  scroll_container: {
    backgroundColor: '#fff',
  },
});
