import React from 'react';
import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  HOUSEHOLD_ACCOUNTS_ROUTE,
  MODAL_ROUTE,
  REGISTER_ACCOUNT_ITEM_ROUTE,
  SET_ACCOUNT_ITEM_ROUTE,
} from './constant';
import { HouseholdAccountScreen } from '../screens/HouseholdAccountScreen';
import { HeaderTitle } from '../components/atoms/Header/HeaderTitle';
import { HeaderIcon } from '../components/atoms/Header/HeaderIcon';
import { RootStackParamList } from '../types/navigation';
import { createStackNavigator } from '@react-navigation/stack';
import { ModalScreen } from '../screens/ModalScreen';
import { RegisterAccountItemScreen } from '../screens/RegisterAccountItemScreen';
import { ChartHouseholdAccountScreen } from '../screens/ChartHouseholdAccountScreen';

const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator<RootStackParamList>();
export const HouseholdAccountStackNavigator: React.FC = () => (
  <RootStack.Navigator>
    <RootStack.Group>
      <RootStack.Screen
        name={HOUSEHOLD_ACCOUNTS_ROUTE}
        component={HouseholdAccountScreen}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name={SET_ACCOUNT_ITEM_ROUTE}
        component={RegisterAccountItemScreen}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name={REGISTER_ACCOUNT_ITEM_ROUTE}
        component={RegisterAccountItemScreen}
        options={{
          headerShown: false,
        }}
      />
    </RootStack.Group>
    <RootStack.Group screenOptions={{ presentation: 'modal' }}>
      <RootStack.Screen
        name={MODAL_ROUTE}
        component={ModalScreen}
        options={{ headerShown: false }}
      />
    </RootStack.Group>
  </RootStack.Navigator>
);
export const MainNavigator: React.FC = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="HouseholdAccount"
      component={HouseholdAccountStackNavigator}
      options={{
        headerTitle: () => {
          const component = <HeaderTitle />;
          return component;
        },
        headerLeft: () => {
          const component = <HeaderIcon />;
          return component;
        },
        headerTitleAlign: 'left',
        tabBarLabel: 'HouseholdAccount',
        tabBarIcon: ({ color, size }) => {
          const component = <Feather name="home" color={color} size={size} />;
          return component;
        },
      }}
    />
    <Tab.Screen
      name="ChartHouseholdAccountScreen"
      component={ChartHouseholdAccountScreen}
      options={{
        headerTitle: () => {
          const component = <HeaderTitle />;
          return component;
        },
        headerLeft: () => {
          const component = <HeaderIcon />;
          return component;
        },
        headerTitleAlign: 'left',
        tabBarLabel: 'Chart',
        tabBarIcon: ({ color, size }) => {
          const component = <Feather name="bar-chart" color={color} size={size} />;
          return component;
        },
      }}
    />
  </Tab.Navigator>
);
