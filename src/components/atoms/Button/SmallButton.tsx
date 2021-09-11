import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
export type ButtonProps = {
  title: string;
  onPress: () => void;
};
export const SmallButton: React.FC <ButtonProps> = ({ title, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#647ACB',
    marginTop: 15,
    paddingVertical: 15,
    borderRadius: 25,
    width: '40%',
    alignItems: 'center',
  },
  text: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 18,
  },
});
