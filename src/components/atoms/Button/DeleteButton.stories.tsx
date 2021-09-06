import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import { DeleteButton } from './DeleteButton';

storiesOf('Atoms/Button/DeleteButton', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('DeleteButton', () => <DeleteButton action={action('clicked-text')} />);
