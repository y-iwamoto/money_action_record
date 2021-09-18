import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import { Line } from './Line';

const chartData = {
  labels: ['09/01', '09/02', '09/03', '09/04', '09/05', '09/06', '09/07'],
  datasets: [
    {
      data: [100, 200, 300, 400, 300, 200, 500],
      color: () => 'rgba(0, 33, 89, 1)',
      strokeWidth: 2,
    },
    {
      data: [500, 400, 300, 200, 300, 400, 300],
      color: () => 'rgba(3, 68, 158, 1)',
      strokeWidth: 2,
    },
  ],
  legend: ['test1', 'test2'],
};

storiesOf('Atoms/Chart/Line', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Line', () => <Line data={chartData} />);
