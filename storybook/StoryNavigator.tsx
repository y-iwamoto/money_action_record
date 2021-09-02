/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// storybook/StoryNavigator.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/**
 * Helper component tor create a Dummy Stack to access {navigation} object on *.story.tsx files
 *
 * @usage add this decorator
 * ```
 * .addDecorator(reactNavigationDecorator)
 * ```
 */

const StoryBookStack = createStackNavigator();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const reactNavigationDecorator = (story: () => any) => {
  const Screen = () => story();
  return (
    <NavigationContainer independent={true}>
      <StoryBookStack.Navigator>
        <StoryBookStack.Screen
          name="MyStorybookScreen"
          component={Screen}
          options={{header: () => null}}
        />
      </StoryBookStack.Navigator>
    </NavigationContainer>
  );
};