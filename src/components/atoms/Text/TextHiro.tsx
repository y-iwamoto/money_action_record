import React from 'react';
import { Text, StyleSheet } from 'react-native';

type Props = {
  label: string;
};

export const TextHiro: React.FC<Props> = ({ label }: Props) => {
  return <Text style={styles.label}>{label}</Text>;
};
const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    padding: 10,
  },
});
