import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import FormContext from '../../../../storybook/stories/FormContext';
import { Inputs } from './Inputs';

storiesOf('Atoms/Form/Inputs', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Inputs', () => (
    <FormContext>
      <Inputs />
    </FormContext>
  ));
