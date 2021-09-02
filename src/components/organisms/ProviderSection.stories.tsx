import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import React from 'react';
import { ProviderSection } from './ProviderSection';
import CenterView from '../../../storybook/stories/CenterView';

storiesOf('Organisms/ProviderSection', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('ProviderSection', () => (
    <ProviderSection
      authAction={action('clicked-text')}
      headingLabel="会員登録"
      noteLabel="他サイトへのログインをすることで会員登録が完了します"
    />
  ))
  .add('ProviderSection not noteLabel', () => (
    <ProviderSection
      authAction={action('clicked-text')}
      headingLabel="ログイン"
      noteLabel={null}
    />
  ));
