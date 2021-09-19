import React, { useEffect } from 'react';
import { Expense } from '../types/expense';
import { LOGIN_ROUTE, REGISTER_ACCOUNT_ITEM_ROUTE } from '../navigation/constant';
import { UseFetchItemsHook } from './useFetchItemsHook';
import { UseFetchExpenseHook } from './useFetchExpenseHook';
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
import { User } from '../types/user';
import { Item } from '../types/item';

// eslint-disable-next-line @typescript-eslint/ban-types
export function UseFetchCommonInfoHook(
  setLoad: (value: ((prevState: boolean) => boolean) | boolean) => void,
  user: User | null | undefined,
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
  setItems: (items: Item[]) => void,
  todayDiff: number,
  setExpenses: (expenses: Expense[][]) => void,
  isFocused: boolean,
): void {
  useEffect(() => {
    let isMounted = true;
    const f = async () => {
      if (isMounted) {
        if (isMounted) setLoad(true);
        if (!user) {
          if (isMounted) setLoad(false);
          navigation.navigate(LOGIN_ROUTE);
          return;
        }
        const { items, itemsArray } = await UseFetchItemsHook(user, isMounted, setItems);
        if (!items || items.length === 0) {
          navigation.navigate(REGISTER_ACCOUNT_ITEM_ROUTE);
          return;
        }

        await UseFetchExpenseHook(todayDiff, user, itemsArray, isMounted, setExpenses, setLoad);
      }
    };
    if (isFocused) {
      f();
    }
    return () => {
      isMounted = false;
    };
  }, [isFocused, navigation, setExpenses, setItems, user, todayDiff, setLoad]);
}
