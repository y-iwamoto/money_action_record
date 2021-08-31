import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import { TextHiro } from './TextHiro';

storiesOf('Atoms/Text/TextHiro', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('TextHiro', () => <TextHiro label="一項目から始められるお手軽家計簿" />);
