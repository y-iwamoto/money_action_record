import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../storybook/stories/CenterView';
import { TransitionSection } from './TransitionSection';

storiesOf('Organisms/TransitionSection', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('TransitionSection', () => <TransitionSection />);
