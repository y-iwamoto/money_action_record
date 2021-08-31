import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../storybook/stories/CenterView';
import { Hiro } from './Hiro';

storiesOf('Molecules/Hiro', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Hiro', () => <Hiro />);
