import { useEffect } from 'react';
import { Item } from '../types/item';
import { Expense } from '../types/expense';

export function UseFetchPieData(
  getPieData: () => void,
  isFocused: boolean,
  todayDiff: number,
  items: Item[],
  expenses: Expense[][],
): void {
  useEffect(() => {
    let isMounted = true;
    const f = async () => {
      if (isMounted) {
        getPieData();
      }
    };
    if (isFocused) {
      f();
    }
    return () => {
      isMounted = false;
    };
  }, [isFocused, todayDiff, items, expenses, getPieData]);
}
