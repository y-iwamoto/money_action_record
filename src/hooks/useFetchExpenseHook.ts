import { User } from '../types/user';
import { Item } from '../types/item';
import { Expense } from '../types/expense';
import dayjs from 'dayjs';
import { fetchEachExpenses } from '../libs/firestore';

export async function UseFetchExpenseHook(
  todayDiff: number,
  user: User,
  itemsArray: Item[],
  isMounted: boolean,
  setExpenses: (expenses: Expense[][]) => void,
  setLoad: (value: ((prevState: boolean) => boolean) | boolean) => void,
): Promise<void> {
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
  }
}
