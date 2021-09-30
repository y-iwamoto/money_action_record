import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useCallback, useContext, useMemo, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, View } from 'react-native';
import ChartHouseholdAccountSection from '../components/organisms/ChartHouseholdAccountSection';
import PieChartSection from '../components/organisms/PieChartSection';
import SearchSection from '../components/organisms/SearchSection';
import { ExpensesContext } from '../contexts/expenseContext';
import { ItemsContext } from '../contexts/itemContext';
import { UserContext } from '../contexts/userContext';
import { AuthScreenNavigationProp } from '../types/navigation';
import { UseFetchCommonInfoHook } from '../hooks/userFetchCommonInfoHook';
import { UseSetChartDataHook } from '../hooks/useSetChartDataHook';
import { UseSearchSectionHook } from '../hooks/useSearchSectionHook';
import { UseFetchPieData } from '../hooks/UseFetchPieData';

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

function getComponent(
  chartData: ChartData | undefined,
  pieChartData:
    | {
        name: string;
        population: number;
        color: string;
        strokeWidth: number;
        legendFontColor: string;
        legendFontSize: number;
      }[]
    | undefined,
  load: boolean,
  onItemButton: () => void,
  onMinnusDayButton: (todayDiff: number) => void,
  todayDiff: number,
  onPlusDayButton: (todayDiff: number) => void,
) {
  return !chartData || !pieChartData || load ? (
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
}

const ChartHouseholdAccountScreen: React.FC = () => {
  const { user } = useContext(UserContext);
  const { items, setItems } = useContext(ItemsContext);
  const { expenses, setExpenses } = useContext(ExpensesContext);
  const [todayDiff, setTodayDiff] = useState(0);
  const navigation = useNavigation<AuthScreenNavigationProp>();
  const isFocused = useIsFocused();

  const { onItemButton, onMinnusDayButton, onPlusDayButton } = UseSearchSectionHook(
    navigation,
    items,
    setTodayDiff,
  );
  const [load, setLoad] = useState(false);
  const [chartData, setChartData] = useState<ChartData>();
  const [pieChartData, setPieChartData] = useState<PieChartData>();

  UseFetchCommonInfoHook(setLoad, user, navigation, setItems, todayDiff, setExpenses, isFocused);
  const getPieData = useCallback(
    () => UseSetChartDataHook(todayDiff, items, expenses, setChartData, setPieChartData),
    [todayDiff, items, expenses, setChartData, setPieChartData],
  );
  UseFetchPieData(getPieData, isFocused, todayDiff, items, expenses);

  return useMemo(
    () =>
      getComponent(
        chartData,
        pieChartData,
        load,
        onItemButton,
        onMinnusDayButton,
        todayDiff,
        onPlusDayButton,
      ),
    [chartData, pieChartData, load, onItemButton, onMinnusDayButton, todayDiff, onPlusDayButton],
  );
};

export default React.memo(ChartHouseholdAccountScreen);

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
