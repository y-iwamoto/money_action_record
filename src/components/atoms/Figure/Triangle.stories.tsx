import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import { Triangle } from './Triangle';

storiesOf('Atoms/Figure/Triangle', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Left Arrow', () => (
    <Triangle
      style={{
        transform: [{ rotate: '-90deg' }],
      }}
      onPressButton={action('clicked-text')}
    />
  ))
  .add('Right Arrow', () => (
    <Triangle
      style={{
        transform: [{ rotate: '90deg' }],
      }}
      onPressButton={action('clicked-text')}
    />
  ));
