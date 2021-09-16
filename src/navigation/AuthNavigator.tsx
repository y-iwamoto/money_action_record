import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Platform } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { HeaderIcon } from '../components/atoms/Header/HeaderIcon';
import { HeaderTitle } from '../components/atoms/Header/HeaderTitle';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterAccountItemScreen } from '../screens/RegisterAccountItemScreen';
import { SignUpScreen } from '../screens/SignUpScreen';

import { RootStackParamList } from '../types/navigation';
import { LOGIN_ROUTE, REGISTER_ACCOUNT_ITEM_ROUTE, SIGN_UP_ROUTE } from './constant';

const Root = createStackNavigator<RootStackParamList>();
const NAV_HEIGHT = Platform.select({
  ios: hp('11%'),
  android: hp('10%'),
});

export const AuthNavigator: React.FC = () => (
  <Root.Navigator
    initialRouteName={LOGIN_ROUTE}
    screenOptions={{
      headerStyle: {
        height: NAV_HEIGHT,
      },
    }}>
    <Root.Group>
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
    </Root.Group>
  </Root.Navigator>
);
