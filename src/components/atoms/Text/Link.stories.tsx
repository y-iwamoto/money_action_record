import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import { Link } from './Link';

storiesOf('Atoms/Text/Link', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Link', () => <Link append={action('clicked-text')} />);
