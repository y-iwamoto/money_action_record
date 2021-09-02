import React from 'react';
import { TouchableOpacity, View, Platform, Text, StyleSheet } from 'react-native';

const HEIGHT = 23;
const COLOR = '#1F2933';

type Props = {
  isCrumbActive: boolean;
  index: number;
  text: string;
  firstCrumbStyle: { borderTopLeftRadius: number; borderBottomLeftRadius: number }[] | null;
  lastCrumbStyle: { borderTopRightRadius: number; borderBottomRightRadius: number }[] | null;
  height: number;
  triangleHeadStyle: { [key: string]: number | undefined };
  triangleTailStyle: { [key: string]: number | undefined };
};
export const Crumb: React.FC<Props> = ({
  isCrumbActive,
  text,
  firstCrumbStyle,
  lastCrumbStyle,
  height,
  triangleHeadStyle,
  triangleTailStyle,
}: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.crumbStyle,
        isCrumbActive ? [styles.activeCrumbStyle] : {},
        firstCrumbStyle,
        lastCrumbStyle,
        { height },
      ]}
      activeOpacity={1}>
      {Platform.OS === 'android' && !firstCrumbStyle ? (
        <View style={{ width: height / 2.0, height, backgroundColor: 'transparent' }} />
      ) : null}
      <View style={styles.crumbContainer}>
        {isCrumbActive && !firstCrumbStyle ? (
          <View
            style={[
              styles.leftTriangleContainer,
              styles.triangleTail,
              triangleTailStyle,
              { left: -height / 2 },
              Platform.OS === 'android' ? {} : {},
            ]}
          />
        ) : null}
        <Text
          style={[styles.crumbTextStyle, isCrumbActive ? [styles.activeCrumbTextStyle] : {}]}
          numberOfLines={1}
          ellipsizeMode="tail">
          {'  ' + text + ' '}
        </Text>
        {isCrumbActive && !lastCrumbStyle ? (
          <View
            style={[
              styles.rightTriangleContainer,
              styles.triangleHead,
              triangleHeadStyle,
              { right: -height / 2 },
              Platform.OS === 'android' ? {} : {},
            ]}
          />
        ) : null}
      </View>
      {Platform.OS === 'android' && !lastCrumbStyle ? (
        <View style={{ width: height / 2.0, height, backgroundColor: 'white' }} />
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  crumbsContainerStyle: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#d6d6d6',
    justifyContent: 'space-between',
  },
  crumbStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: HEIGHT,
  },
  activeCrumbStyle: {
    backgroundColor: COLOR,
    borderColor: COLOR,
  },
  crumbTextStyle: {
    color: COLOR,
    fontSize: 12,
  },
  activeCrumbTextStyle: {
    color: 'white',
    fontWeight: '600',
  },
  crumbContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  rightTriangleContainer: {
    position: 'absolute',
    right: 0,
    zIndex: 1,
  },
  leftTriangleContainer: {
    position: 'absolute',
    left: 0,
    zIndex: 1,
  },
  triangleHead: {
    borderTopWidth: HEIGHT / 2.0,
    borderRightWidth: 0,
    borderBottomWidth: HEIGHT / 2.0,
    borderLeftWidth: HEIGHT / 2.0,
    borderColor: COLOR,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
  },
  triangleTail: {
    borderTopWidth: HEIGHT / 2.0,
    borderRightWidth: 0,
    borderBottomWidth: HEIGHT / 2.0,
    borderLeftWidth: HEIGHT / 2.0,
    borderColor: 'transparent',
    borderTopColor: COLOR,
    borderBottomColor: COLOR,
  },
});
