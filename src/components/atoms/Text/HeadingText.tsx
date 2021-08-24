import React from 'react';
import { Text, StyleSheet } from 'react-native';

type Props = {
  label: string;
};

export const HeadingText: React.FC<Props> = ({ label }: Props) => {
  return <Text style={styles.label}>{label}</Text>;
};

const styles = StyleSheet.create({
  label: {
    color: '#707070',
    fontSize: 18,
    paddingTop: 20,
    paddingBottom: 20,
  },
});
