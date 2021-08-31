import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import React from 'react';
import CenterView from '../../../storybook/stories/CenterView';
import { ProviderButtons } from './ProviderButtons';

storiesOf('Molecules/ProviderButtons', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('ProviderButtons', () => <ProviderButtons authAction={action('clicked-text')} />);
