import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../../storybook/stories/CenterView';
import { reactNavigationDecorator } from '../../storybook/StoryNavigator';
import { SignUpScreen } from './SignUpScreen';

storiesOf('Stories/SignUpScreen', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .addDecorator(reactNavigationDecorator)
  .add('SignUpScreen', () => <SignUpScreen />);
