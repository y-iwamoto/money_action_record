import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SmallButton } from '../atoms/Button/SmallButton';
type Props = {
  handleDecline: () => void;
  handleSaveAccount: () => void;
};
export const SmallButtons: React.FC<Props> = ({ handleDecline, handleSaveAccount }: Props) => {
  return (
    <View style={styles.button}>
      <SmallButton title="戻る" onPress={handleDecline} />
      <SmallButton title="設定する" onPress={handleSaveAccount} />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-evenly',
  },
});
