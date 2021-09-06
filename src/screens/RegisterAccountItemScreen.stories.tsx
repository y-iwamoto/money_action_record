import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../../storybook/stories/CenterView';
import { reactNavigationDecorator } from '../../storybook/StoryNavigator';
import { RegisterAccountItemScreen } from './RegisterAccountItemScreen';

storiesOf('Stories/RegisterAccountItemScreen', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .addDecorator(reactNavigationDecorator)
  .add('RegisterAccountItemScreen', () => <RegisterAccountItemScreen />);
