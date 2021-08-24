import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextHiro } from '../atoms/Text/TextHiro';

export const Hiro: React.FC = () => {
  return (
    <View style={styles.container}>
      <TextHiro label="今度は挫折しない" />
      <TextHiro label="一項目から始められるお手軽家計簿" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    height: 100,
    marginVertical: 10,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
});
