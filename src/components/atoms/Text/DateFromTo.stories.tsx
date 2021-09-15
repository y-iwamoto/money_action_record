import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import { DateFromTo } from './DateFromTo';

storiesOf('Atoms/Text/DateFromTo', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('DateFromTo', () => <DateFromTo todayDiff={0} />);
