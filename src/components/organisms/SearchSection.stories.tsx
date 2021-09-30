import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../storybook/stories/CenterView';
import { action } from '@storybook/addon-actions';
import SearchSection from './SearchSection';

storiesOf('Organisms/SearchSection', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('SearchSection', () => (
    <SearchSection
      onItemButton={action('clicked-text')}
      onMinnusDayButton={action('clicked-text')}
      onPlusDayButton={action('clicked-text')}
      todayDiff={0}
    />
  ));
