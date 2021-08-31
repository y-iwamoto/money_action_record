import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import React from 'react';
import { ProviderButton } from './ProviderButton';
import CenterView from '../../../../storybook/stories/CenterView';

storiesOf('Atoms/Button/ProviderButton', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Facebook', () => (
    <ProviderButton providerType="facebook" title="Facebook" authAction={action('clicked-text')} />
  ))
  .add('Google', () => (
    <ProviderButton providerType="google" title="Google" authAction={action('clicked-text')} />
  ));
