import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import React from 'react';
import CenterView from '../../../storybook/stories/CenterView';
import { HouseholdAccountSection } from './HouseholdAccountSection';
import firebase from 'firebase';

storiesOf('Organisms/HouseholdAccountSection', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('HouseholdAccountSection', () => (
    <HouseholdAccountSection
      onPressButton={action('clicked-text')}
      items={[
        {
          name: 'test1',
          item_id: '100010001',
          createdAt: firebase.firestore.Timestamp.now(),
          updatedAt: firebase.firestore.Timestamp.now(),
        },
      ]}
      expenses={[
        [
          {
            expense_id: '333333',
            uid: '222222',
            item_id: '100010001',
            amount: 0,
            date: '2021/09/15',
            createdAt: firebase.firestore.Timestamp.now(),
            updatedAt: firebase.firestore.Timestamp.now(),
          },
        ],
        [
          {
            expense_id: '333333',
            uid: '222222',
            item_id: '100010001',
            amount: 0,
            date: '2021/09/16',
            createdAt: firebase.firestore.Timestamp.now(),
            updatedAt: firebase.firestore.Timestamp.now(),
          },
        ],
        [
          {
            expense_id: '333333',
            uid: '222222',
            item_id: '100010001',
            amount: 0,
            date: '2021/09/17',
            createdAt: firebase.firestore.Timestamp.now(),
            updatedAt: firebase.firestore.Timestamp.now(),
          },
        ],
        [
          {
            expense_id: '333333',
            uid: '222222',
            item_id: '100010001',
            amount: 0,
            date: '2021/09/18',
            createdAt: firebase.firestore.Timestamp.now(),
            updatedAt: firebase.firestore.Timestamp.now(),
          },
        ],
        [
          {
            expense_id: '333333',
            uid: '222222',
            item_id: '100010001',
            amount: 0,
            date: '2021/09/19',
            createdAt: firebase.firestore.Timestamp.now(),
            updatedAt: firebase.firestore.Timestamp.now(),
          },
        ],
        [
          {
            expense_id: '333333',
            uid: '222222',
            item_id: '100010001',
            amount: 0,
            date: '2021/09/20',
            createdAt: firebase.firestore.Timestamp.now(),
            updatedAt: firebase.firestore.Timestamp.now(),
          },
        ],
        [
          {
            expense_id: '333333',
            uid: '222222',
            item_id: '100010001',
            amount: 0,
            date: '2021/09/21',
            createdAt: firebase.firestore.Timestamp.now(),
            updatedAt: firebase.firestore.Timestamp.now(),
          },
        ],
      ]}
      todayDiff={0}
    />
  ));
