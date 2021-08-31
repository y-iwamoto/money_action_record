import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import { PrimaryButton } from './PrimaryButton';

storiesOf('Atoms/Button/PrimaryButton', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('PrimaryButton', () => <PrimaryButton label="会員登録はこちら" />);
