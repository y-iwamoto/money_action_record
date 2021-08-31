import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import { HeaderIcon } from './HeaderIcon';

storiesOf('Atoms/Header/HeaderIcon', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('HeaderIcon', () => <HeaderIcon />);
