/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';
import { Item } from '../types/item';

type ItemsContextValue = {
  items: Item[];
  setItems: (items: Item[]) => void;
};

export const ItemsContext = createContext<ItemsContextValue>({
  items: [],
  setItems: () => {},
});
