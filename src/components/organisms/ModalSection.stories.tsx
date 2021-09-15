import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import React from 'react';
import CenterView from '../../../storybook/stories/CenterView';
import { ModalSection } from './ModalSection';
import ExpesnseFormContext from '../../../storybook/stories/ExpesnseFormContext';

storiesOf('Organisms/ModalSection', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('ModalSection', () => (
    <ExpesnseFormContext>
      <ModalSection
        isModalVisible={true}
        handleDecline={action('clicked-text')}
        handleSaveAccount={action('clicked-text')}
      />
    </ExpesnseFormContext>
  ));
