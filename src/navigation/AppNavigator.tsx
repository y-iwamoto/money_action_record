import React, { useContext } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { UserContext } from '../contexts/userContext';
import { AuthNavigator } from './AuthNavigator';
import { MainNavigator } from './MainNavigator';

export const AppNavigator: React.FC = () => {
  const { user } = useContext(UserContext);
  return <NavigationContainer>{!user ? <AuthNavigator /> : <MainNavigator />}</NavigationContainer>;
};
