import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import React from 'react';
import CenterView from '../../../storybook/stories/CenterView';
import SmallButtons from './SmallButtons';

storiesOf('Molecules/SmallButtons', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('SmallButtons', () => (
    <SmallButtons
      handleDecline={action('clicked-text')}
      handleSaveAccount={action('clicked-text')}
    />
  ));
