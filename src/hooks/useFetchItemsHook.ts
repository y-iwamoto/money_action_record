import { User } from '../types/user';
import { Item } from '../types/item';
import { fetchItems } from '../libs/firestore';

type ReturnType = {
  items: void | Item[];
  itemsArray: Item[];
};
export async function UseFetchItemsHook(
  user: User,
  isMounted: boolean,
  setItems: (items: Item[]) => void,
): Promise<ReturnType> {
  const items = await fetchItems(user);
  const itemsArray = items ? items : [];
  if (isMounted) {
    setItems(itemsArray);
  }
  return { items, itemsArray };
}
