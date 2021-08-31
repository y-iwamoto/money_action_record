import React from 'react';
import StorybookUI from './storybook';
import { ENV } from './src/environments';
import { AppNavigator } from './src/navigation/AppNavigator';

const App: React.FC = () =>  {
  return (
    <AppNavigator/>
  );
};

export default ENV.load_storybook == true ? StorybookUI : App;