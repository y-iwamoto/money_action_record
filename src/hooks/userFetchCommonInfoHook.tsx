import { useEffect } from 'react';
import { Expense } from '../types/expense';
import { LOGIN_ROUTE, REGISTER_ACCOUNT_ITEM_ROUTE } from '../navigation/constant';
import { UseFetchItemsHook } from './useFetchItemsHook';
import { UseFetchExpenseHook } from './useFetchExpenseHook';
import { AuthScreenNavigationProp } from '../types/navigation';
import { User } from '../types/user';
import { Item } from '../types/item';

export function UseFetchCommonInfoHook(
  setLoad: (value: ((prevState: boolean) => boolean) | boolean) => void,
  user: User | null | undefined,
  navigation: AuthScreenNavigationProp,
  setItems: (items: Item[]) => void,
  todayDiff: number,
  setExpenses: (expenses: Expense[][]) => void,
  isFocused: boolean,
): void {
  useEffect(() => {
    let isMounted = true;
    const f = async () => {
      if (isMounted) {
        if (isMounted) setLoad(true);
        if (!user) {
          if (isMounted) {
            setLoad(false);
          }
          navigation.navigate(LOGIN_ROUTE);
          return;
        }
        const { items, itemsArray } = await UseFetchItemsHook(user, isMounted, setItems);
        if (!items || items.length === 0) {
          navigation.navigate(REGISTER_ACCOUNT_ITEM_ROUTE);
          return;
        }

        await UseFetchExpenseHook(todayDiff, user, itemsArray, isMounted, setExpenses);
        if (isMounted) {
          setLoad(false);
        }
      }
    };
    if (isFocused) {
      f();
    }
    return () => {
      isMounted = false;
    };
  }, [isFocused, navigation, setExpenses, setItems, user, todayDiff, setLoad]);
}
