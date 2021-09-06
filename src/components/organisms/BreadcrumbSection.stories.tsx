import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../storybook/stories/CenterView';
import { BreadcrumbSection } from './BreadcrumbSection';

storiesOf('Organisms/BreadcrumbSection', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('BreadcrumbSection', () => <BreadcrumbSection flowDepth={0} />);
