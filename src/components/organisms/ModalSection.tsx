import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Input } from '../atoms/Form/Input';
import { Modal, ModalBody, ModalContainer, ModalFooter, ModalHeader } from '../atoms/Form/Modal';
import { NoteText } from '../atoms/Text/NoteText';
import { SmallButtons } from '../molecules/SmallButtons';

type ModalProps = {
  isModalVisible: boolean;
  handleDecline: () => void;
  handleSaveAccount: () => void;
};

export const ModalSection: React.FC<ModalProps> = ({
  isModalVisible,
  handleDecline,
  handleSaveAccount,
}: ModalProps) => {
  return (
    <Modal isVisible={isModalVisible}>
      <ModalContainer>
        <View style={styles.modal}>
          <ModalHeader title="家計簿に金額を設定" />
          <ModalBody>
            <NoteText label="家計簿に金額を設定してください" />
            <Input fieldName="amount" />
          </ModalBody>
          <ModalFooter>
            <SmallButtons handleDecline={handleDecline} handleSaveAccount={handleSaveAccount} />
          </ModalFooter>
        </View>
      </ModalContainer>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    paddingTop: 10,
    borderColor: 'grey',
    borderBottomWidth: 2,
  },
  button: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-evenly',
  },
  modal: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
