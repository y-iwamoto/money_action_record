import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import { SmallButton } from './SmallButton';

storiesOf('Atoms/Button/SmallButton', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('SmallButton', () => <SmallButton title="設定する" onPress={action('clicked-text')} />);
