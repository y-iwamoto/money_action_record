import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import { HeadingText } from './HeadingText';

storiesOf('Atoms/Text/HeadingText', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('HeadingText', () => <HeadingText label="ログイン" />);
