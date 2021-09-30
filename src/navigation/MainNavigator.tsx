import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeTabNavigator } from './HomeTabNavigator';
import ChartHouseholdAccountScreen from '../screens/ChartHouseholdAccountScreen';
import { SignOutScreen } from '../screens/SignOutScreen';
import { HeaderTitle } from '../components/atoms/Header/HeaderTitle';

const Drawer = createDrawerNavigator();

export const MainNavigator: React.FC = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen
      name="Home"
      component={HomeTabNavigator}
      options={{
        headerTitle: () => {
          const component = <HeaderTitle />;
          return component;
        },
        headerTitleAlign: 'left',
      }}
    />
    <Drawer.Screen
      name="Charts"
      component={ChartHouseholdAccountScreen}
      options={{
        headerTitle: () => {
          const component = <HeaderTitle />;
          return component;
        },
        headerTitleAlign: 'left',
      }}
    />
    <Drawer.Screen
      name="Signout"
      component={SignOutScreen}
      options={{
        headerTitle: () => {
          const component = <HeaderTitle />;
          return component;
        },
        headerTitleAlign: 'left',
      }}
    />
  </Drawer.Navigator>
);
