import { useCallback } from 'react';
import { SET_ACCOUNT_ITEM_ROUTE } from '../navigation/constant';
import { AuthScreenNavigationProp } from '../types/navigation';
import { Item } from '../types/item';

type ReturnType = {
  onItemButton: () => void;
  onMinnusDayButton: (todayDiff: number) => void;
  onPlusDayButton: (todayDiff: number) => void;
};

export function UseSearchSectionHook(
  navigation: AuthScreenNavigationProp,
  items: Item[],
  setTodayDiff: (value: ((prevState: number) => number) | number) => void,
): ReturnType {
  const onItemButton = useCallback(
    () => navigation.navigate(SET_ACCOUNT_ITEM_ROUTE, items),
    [navigation, items],
  );
  const onMinnusDayButton = useCallback(
    (todayDiff: number) => {
      setTodayDiff(todayDiff - 7);
    },
    [setTodayDiff],
  );
  const onPlusDayButton = useCallback(
    (todayDiff: number) => {
      setTodayDiff(todayDiff + 7);
    },
    [setTodayDiff],
  );
  return { onItemButton, onMinnusDayButton, onPlusDayButton };
}
