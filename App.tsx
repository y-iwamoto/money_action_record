import React, { useState } from 'react';
import StorybookUI from './storybook';
import { ENV } from './src/environments';
import { AppNavigator } from './src/navigation/AppNavigator';
import { User } from './src/types/user';
import { UserContext } from './src/contexts/userContext';
import { Item } from './src/types/item';
import { ItemsContext } from './src/contexts/itemContext';
import { Expense } from './src/types/expense';
import { ExpensesContext } from './src/contexts/expenseContext';

const App: React.FC = () =>  {
  const [user, setUser] = useState<User | null>();
  const [items, setItems] = useState<Item[]>([]);
  const [expenses, setExpenses] = useState<Expense[][]>([]);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ItemsContext.Provider value={{items, setItems}}>
        <ExpensesContext.Provider value={{expenses, setExpenses}}>
          <AppNavigator/>
        </ExpensesContext.Provider>
      </ItemsContext.Provider>
    </UserContext.Provider>
  );
};

export default ENV.load_storybook == true ? StorybookUI : App;