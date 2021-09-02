import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../../storybook/stories/CenterView';
import { LoginScreen } from './LoginScreen';
import { reactNavigationDecorator } from '../../storybook/StoryNavigator';

storiesOf('Stories/LoginScreen', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .addDecorator(reactNavigationDecorator)
  .add('LoginScreen', () => <LoginScreen />);
