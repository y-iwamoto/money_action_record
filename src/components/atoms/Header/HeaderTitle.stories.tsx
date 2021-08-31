import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import { HeaderTitle } from './HeaderTitle';

storiesOf('Atoms/Header/HeaderTitle', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('HeaderTitle', () => <HeaderTitle />);
