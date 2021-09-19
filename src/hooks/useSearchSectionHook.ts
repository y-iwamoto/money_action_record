import React from 'react';
import { SET_ACCOUNT_ITEM_ROUTE } from '../navigation/constant';
import { RootStackParamList } from '../types/navigation';
import {
  EventConsumer,
  EventMapCore,
  NavigationAction,
  NavigationProp,
  NavigationState,
  ParamListBase,
  PartialState,
  PrivateValueStore,
  StackActionHelpers,
} from '@react-navigation/native';
import {
  StackHeaderMode,
  StackHeaderProps,
  StackNavigationEventMap,
  TransitionPreset,
} from '@react-navigation/stack/lib/typescript/src/types';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { Item } from '../types/item';

type ReturnType = {
  onItemButton: () => void;
  onMinnusDayButton: (todayDiff: number) => void;
  onPlusDayButton: (todayDiff: number) => void;
};
// eslint-disable-next-line @typescript-eslint/ban-types
export function UseSearchSectionHook(
  navigation: {
    dispatch(
      action:
        | NavigationAction
        | ((state: NavigationState<RootStackParamList> & { type: 'stack' }) => NavigationAction),
    ): void;
    navigate: {
      <RouteName extends keyof RootStackParamList>(
        ...args: undefined extends RootStackParamList[RouteName]
          ? [screen: RouteName] | [screen: RouteName, params: RootStackParamList[RouteName]]
          : [screen: RouteName, params: RootStackParamList[RouteName]]
      ): void;
      <RouteName extends keyof RootStackParamList>(
        options:
          | { key: string; params?: RootStackParamList[RouteName]; merge?: boolean }
          | {
              name: RouteName;
              key?: string;
              params: RootStackParamList[RouteName];
              merge?: boolean;
            },
      ): void;
    };
    reset(
      state:
        | PartialState<NavigationState<RootStackParamList> & { type: 'stack' }>
        | (NavigationState<RootStackParamList> & { type: 'stack' }),
    ): void;
    goBack(): void;
    isFocused(): boolean;
    canGoBack(): boolean;
    getParent<T = NavigationProp<ParamListBase> | undefined>(): T;
    getState(): NavigationState<RootStackParamList> & { type: 'stack' };
  } & PrivateValueStore<RootStackParamList, keyof RootStackParamList, {}> & {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      setParams(
        params: Partial<
          RootStackParamList[
            | 'LoginScreen'
            | 'SignUpScreen'
            | 'RegisterAccountItemScreen'
            | 'SetAccountItemScreen'
            | 'HouseholdeAccountsScreen'
            | 'ModalScreen']
        >,
      ): void; // @ts-ignore
      setOptions(
        options: Partial<
          Omit<HeaderOptions, 'headerLeft' | 'headerTitle'> & {
            headerTitle?: string | ((props: HeaderTitleProps) => React.ReactNode);
            headerLeft?: (props: HeaderBackButtonProps) => React.ReactNode;
            headerBackAllowFontScaling?: boolean;
            headerBackAccessibilityLabel?: string;
            headerBackTestID?: string;
            headerBackTitle?: string;
            headerBackTitleVisible?: boolean;
            headerBackTitleStyle?: StyleProp<TextStyle>;
            headerTruncatedBackTitle?: string;
            headerBackImage?: React.ComponentProps<typeof HeaderBackButton>['backImage'];
          } & Partial<TransitionPreset> & {
              title?: string;
              header?: (props: StackHeaderProps) => React.ReactNode;
              headerMode?: StackHeaderMode;
              headerShown?: boolean;
              cardShadowEnabled?: boolean;
              cardOverlayEnabled?: boolean;
              cardOverlay?: (props: {
                style: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
              }) => React.ReactNode;
              cardStyle?: StyleProp<ViewStyle>;
              presentation?: 'card' | 'modal' | 'transparentModal';
              animationEnabled?: boolean;
              animationTypeForReplace?: 'push' | 'pop';
              gestureEnabled?: boolean;
              gestureResponseDistance?: number;
              gestureVelocityImpact?: number;
              detachPreviousScreen?: boolean;
              keyboardHandlingEnabled?: boolean;
            }
        >,
      ): void;
    } & EventConsumer<
      StackNavigationEventMap &
        EventMapCore<NavigationState<RootStackParamList> & { type: 'stack' }>
    > &
    PrivateValueStore<
      RootStackParamList,
      | 'LoginScreen'
      | 'SignUpScreen'
      | 'RegisterAccountItemScreen'
      | 'SetAccountItemScreen'
      | 'HouseholdeAccountsScreen'
      | 'ModalScreen',
      StackNavigationEventMap
    > &
    StackActionHelpers<RootStackParamList>,
  items: Item[],
  setTodayDiff: (value: ((prevState: number) => number) | number) => void,
): ReturnType {
  const onItemButton = () => navigation.navigate(SET_ACCOUNT_ITEM_ROUTE, items);
  const onMinnusDayButton = (todayDiff: number) => {
    setTodayDiff(todayDiff - 7);
  };
  const onPlusDayButton = (todayDiff: number) => {
    setTodayDiff(todayDiff + 7);
  };
  return { onItemButton, onMinnusDayButton, onPlusDayButton };
}
