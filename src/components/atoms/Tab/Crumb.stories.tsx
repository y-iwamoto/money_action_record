import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import { Crumb } from './Crumb';

storiesOf('Atoms/Tab/Crumb', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('active first Crumb', () => <Crumb
    key={0}
    index={0}
    isCrumbActive={0 === 0}
    text={'会員登録'}
    firstCrumbStyle={[{ borderTopLeftRadius: 4, borderBottomLeftRadius: 4 }]}
    lastCrumbStyle={null}
    height={30}
    triangleTailStyle={{
      borderTopWidth: 30 / 2.0,
      borderBottomWidth: 30 / 2.0,
      borderLeftWidth: 30 / 2.0,
    }}
    triangleHeadStyle={{
      borderTopWidth: 30 / 2.0,
      borderBottomWidth: 30 / 2.0,
      borderLeftWidth: 30 / 2.0,
    }}
  />)
  .add('non active Crumb', () => <Crumb
    key={1}
    index={1}
    isCrumbActive={false}
    text={'家計簿項目登録'}
    firstCrumbStyle={null}
    lastCrumbStyle={null}
    height={30}
    triangleTailStyle={{
      borderTopWidth: 30 / 2.0,
      borderBottomWidth: 30 / 2.0,
      borderLeftWidth: 30 / 2.0,
    }}
    triangleHeadStyle={{
      borderTopWidth: 30 / 2.0,
      borderBottomWidth: 30 / 2.0,
      borderLeftWidth: 30 / 2.0,
    }}
  />)
  .add('active second Crumb', () => <Crumb
    key={1}
    index={1}
    isCrumbActive={0 === 0}
    text={'家計簿項目登録'}
    firstCrumbStyle={null}
    lastCrumbStyle={null}
    height={30}
    triangleTailStyle={{
      borderTopWidth: 30 / 2.0,
      borderBottomWidth: 30 / 2.0,
      borderLeftWidth: 30 / 2.0,
    }}
    triangleHeadStyle={{
      borderTopWidth: 30 / 2.0,
      borderBottomWidth: 30 / 2.0,
      borderLeftWidth: 30 / 2.0,
    }}
  />)
  .add('active Last Crumb', () => <Crumb
    key={0}
    index={0}
    isCrumbActive={0 === 0}
    text={'利用開始'}
    firstCrumbStyle={null}
    lastCrumbStyle={[{ borderTopRightRadius: 4, borderBottomRightRadius: 4 }]}
    height={30}
    triangleTailStyle={{
      borderTopWidth: 30 / 2.0,
      borderBottomWidth: 30 / 2.0,
      borderLeftWidth: 30 / 2.0,
    }}
    triangleHeadStyle={{
      borderTopWidth: 30 / 2.0,
      borderBottomWidth: 30 / 2.0,
      borderLeftWidth: 30 / 2.0,
    }}
  />)
;
