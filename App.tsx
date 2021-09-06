import React, { useState } from 'react';
import StorybookUI from './storybook';
import { ENV } from './src/environments';
import { AppNavigator } from './src/navigation/AppNavigator';
import { User } from './src/types/user';
import { UserContext } from './src/contexts/userContext';

const App: React.FC = () =>  {
  const [user, setUser] = useState<User | null>();
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppNavigator/>
    </UserContext.Provider>
  );
};

export default ENV.load_storybook == true ? StorybookUI : App;