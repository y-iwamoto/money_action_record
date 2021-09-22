import { Item } from '../types/item';
import { Expense } from '../types/expense';
import dayjs from 'dayjs';
import { ChartData } from '../screens/ChartHouseholdAccountScreen';

const COLOR = [
  'rgba(0, 33, 89, 1)',
  'rgba(3, 68, 158, 1)',
  'rgba(9, 103, 210, 1)',
  'rgba(33, 134, 235, 1)',
  'rgba(71, 163, 243, 1)',
  'rgba(124, 196, 250, 1)',
];

export function UseSetChartDataHook(
  todayDiff: number,
  items: Item[],
  expenses: Expense[][] | [],
  setChartData: (
    value: ((prevState: ChartData | undefined) => ChartData | undefined) | ChartData | undefined,
  ) => void,
  setPieChartData: (
    value:
      | ((
          prevState:
            | {
                name: string;
                population: number;
                color: string;
                strokeWidth: number;
                legendFontColor: string;
                legendFontSize: number;
              }[]
            | undefined,
        ) =>
          | {
              name: string;
              population: number;
              color: string;
              strokeWidth: number;
              legendFontColor: string;
              legendFontSize: number;
            }[]
          | undefined)
      | {
          name: string;
          population: number;
          color: string;
          strokeWidth: number;
          legendFontColor: string;
          legendFontSize: number;
        }[]
      | undefined,
  ) => void,
): void {
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
}
