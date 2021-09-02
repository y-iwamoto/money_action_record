import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../storybook/stories/CenterView';
import { Breadcrumb } from './Breadcrumb';

storiesOf('Molecules/Breadcrumb', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Breadcrumb', () =>       <Breadcrumb
    entities={['会員登録', '家計簿項目登録', '利用開始']}
    isTouchable={false}
    flowDepth={0}
    height={30}
    borderRadius={5}
  />
  );
