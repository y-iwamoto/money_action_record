import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../storybook/stories/CenterView';
import { FormSection } from './FormSection';
import FormContext from '../../../storybook/stories/FormContext';

storiesOf('Organisms/FormSection', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('FormSection', () => (
    <FormContext>
      <FormSection onSubmit={() => Promise.resolve()} />
    </FormContext>
  ));
