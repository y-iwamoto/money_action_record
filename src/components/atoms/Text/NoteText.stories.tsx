import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import { NoteText } from './NoteText';

storiesOf('Atoms/Text/NoteText', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('NoteText', () => <NoteText label="他サイトへのログインをすることで会員登録が完了します" />);
