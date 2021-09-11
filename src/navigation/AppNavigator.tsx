import React from 'react';
import { Platform } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { LoginScreen } from '../screens/LoginScreen';
import { HeaderIcon } from '../components/atoms/Header/HeaderIcon';
import { HeaderTitle } from '../components/atoms/Header/HeaderTitle';
import { SignUpScreen } from '../screens/SignUpScreen';
import { HOUSEHOLD_ACCOUNTS_ROUTE, LOGIN_ROUTE, MODAL_ROUTE, REGISTER_ACCOUNT_ITEM_ROUTE, SIGN_UP_ROUTE } from './constant';
import { RootStackParamList } from '../types/navigation';
import { RegisterAccountItemScreen } from '../screens/RegisterAccountItemScreen';
import { HouseholdAccountScreen } from '../screens/HouseholdAccountScreen';
import { ModalScreen } from '../screens/ModalScreen';

const NAV_HEIGHT = Platform.select({
  ios: hp('11%'),
  android: hp('10%'),
});

const Root = createStackNavigator<RootStackParamList>();

export const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Root.Navigator
        initialRouteName={LOGIN_ROUTE}
        screenOptions={{
          headerStyle: {
            height: NAV_HEIGHT,
          },
        }}>
        <Root.Screen
          name={LOGIN_ROUTE}
          component={LoginScreen}
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
          }}
        />
        <Root.Screen
          name={SIGN_UP_ROUTE}
          component={SignUpScreen}
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
          }}
        />
        <Root.Screen
          name={REGISTER_ACCOUNT_ITEM_ROUTE}
          component={RegisterAccountItemScreen}
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
          }}
        />
        <Root.Screen
          name={HOUSEHOLD_ACCOUNTS_ROUTE}
          component={HouseholdAccountScreen}
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
          }}
        />
        <Root.Screen
          name={MODAL_ROUTE}
          mode="modal"
          component={ModalScreen}
          options={{ headerShown: false }}
        />
      </Root.Navigator>
    </NavigationContainer>
  );
};
