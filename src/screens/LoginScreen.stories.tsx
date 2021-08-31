import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../../storybook/stories/CenterView';
import { LoginScreen } from './LoginScreen';

storiesOf('Stories/LoginScreen', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('LoginScreen', () => <LoginScreen />);
