/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';
import { Expense } from '../types/expense';

type ExpensesContextValue = {
  expenses: Expense[][];
  setExpenses: (expenses: Expense[][]) => void;
};

export const ExpensesContext = createContext<ExpensesContextValue>({
  expenses: [[]],
  setExpenses: () => {},
});
