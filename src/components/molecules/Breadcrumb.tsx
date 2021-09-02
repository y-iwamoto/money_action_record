import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Crumb } from '../atoms/Tab/Crumb';

const HEIGHT = 23;

type Props = {
  flowDepth: number;
  entities: Array<string>;
  borderRadius: number;
  isTouchable: boolean;
  height: number;
};

export const Breadcrumb: React.FC<Props> = ({
  flowDepth,
  entities,
  borderRadius,
  height,
}: Props) => {
  const firstCrumbStyle = [
    { borderTopLeftRadius: borderRadius - 1, borderBottomLeftRadius: borderRadius - 1 },
  ];
  const lastCrumbStyle = [
    { borderTopRightRadius: borderRadius - 1, borderBottomRightRadius: borderRadius - 1 },
  ];
  const triangleTailStyle = height
    ? {
      borderTopWidth: height / 2.0,
      borderBottomWidth: height / 2.0,
      borderLeftWidth: height / 2.0,
    }
    : {};
  const triangleHeadStyle = height
    ? {
      borderTopWidth: height / 2.0,
      borderBottomWidth: height / 2.0,
      borderLeftWidth: height / 2.0,
    }
    : {};

  return (
    <View
      style={[styles.crumbsContainerStyle, borderRadius ? { borderRadius } : {}]}
      removeClippedSubviews={false}>
      {entities.map((item, index) => {
        return (
          <Crumb
            key={index}
            index={index}
            isCrumbActive={flowDepth === index}
            text={item}
            firstCrumbStyle={index === 0 ? firstCrumbStyle : null}
            lastCrumbStyle={index === entities.length - 1 ? lastCrumbStyle : null}
            height={height ? height : HEIGHT}
            triangleTailStyle={triangleTailStyle}
            triangleHeadStyle={triangleHeadStyle}
          />
        );
      })}
    </View>
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
});
