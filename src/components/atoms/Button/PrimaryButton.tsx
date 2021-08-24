import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

type Props = {
  label: string;
};

export const PrimaryButton: React.FC<Props> = ({ label }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#647ACB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    color: '#ffffff',
    paddingVertical: 15,
    paddingHorizontal: 50,
    fontSize: 20,
  },
});
