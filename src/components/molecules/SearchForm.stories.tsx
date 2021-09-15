import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import React from 'react';
import CenterView from '../../../storybook/stories/CenterView';
import { SearchForm } from './SearchForm';

storiesOf('Molecules/SearchForm', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('SearchForm', () => (
    <SearchForm
      onMinnusDayButton={action('clicked-text')}
      onPlusDayButton={action('clicked-text')}
      todayDiff={0}
    />
  ));
