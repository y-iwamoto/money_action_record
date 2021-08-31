import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import React from 'react';
import { ProviderSection } from './ProviderSection';
import CenterView from '../../../storybook/stories/CenterView';

storiesOf('Organisms/ProviderSection', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('ProviderSection', () => <ProviderSection authAction={action('clicked-text')} />);
