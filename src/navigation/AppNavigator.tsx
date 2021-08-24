import React from 'react';
import { Platform } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { LoginScreen } from '../screens/LoginScreen';
import { HeaderIcon } from '../components/atoms/Header/HeaderIcon';
import { HeaderTitle } from '../components/atoms/Header/HeaderTitle';

const NAV_HEIGHT = Platform.select({
  ios: hp('10%'),
  android: hp('8%'),
});

const Root = createStackNavigator();

export const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Root.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{
          headerStyle: {
            height: NAV_HEIGHT,
          },
        }}>
        <Root.Screen
          name="LoginScreen"
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
          }}
        />
      </Root.Navigator>
    </NavigationContainer>
  );
};
