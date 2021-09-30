import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import Pie from './Pie';

const pieChartData = [
  {
    name: 'test1',
    population: 1000,
    color: 'rgba(0, 33, 89, 1)',
    strokeWidth: 2,
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'test2',
    population: 4000,
    color: 'rgba(3, 68, 158, 1)',
    strokeWidth: 2,
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
];

storiesOf('Atoms/Chart/Pie', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Pie', () => <Pie data={pieChartData} />);
