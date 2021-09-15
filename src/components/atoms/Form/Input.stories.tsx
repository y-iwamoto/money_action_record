import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import FormContext from '../../../../storybook/stories/FormContext';
import { Input } from './Input';

storiesOf('Atoms/Form/Input', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Input', () => (
    <FormContext>
      <Input fieldName="amount" />
    </FormContext>
  ));
