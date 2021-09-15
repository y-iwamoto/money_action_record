import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { ModalSection } from '../components/organisms/ModalSection';
import { saveExpense } from '../libs/firestore';
import { HOUSEHOLD_ACCOUNTS_ROUTE } from '../navigation/constant';
import { AuthScreenNavigationProp, RootStackParamList } from '../types/navigation';

type ModalProps = {
  isModalVisible: boolean;
  handleDecline: () => void;
  handleSaveAccount: () => void;
};

type ModalScreenRouteProp = RouteProp<RootStackParamList, 'ModalScreen'>;

export const ModalScreen: React.FC<ModalProps> = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const route = useRoute<ModalScreenRouteProp>();
  const expense = route.params;

  const methods = useForm({
    defaultValues: { amount: expense && expense.amount ? expense.amount : '0' },
  });
  const navigation = useNavigation<AuthScreenNavigationProp>();
  const handleDecline = () => {
    setIsModalVisible(false);
    navigation.navigate(HOUSEHOLD_ACCOUNTS_ROUTE);
  };

  const handleSaveAccount = async (data: { amount: string }) => {
    await saveExpense(Object.assign(expense, { amount: data.amount }));
    navigation.navigate(HOUSEHOLD_ACCOUNTS_ROUTE);
  };
  return (
    <FormProvider {...methods}>
      <ModalSection
        isModalVisible={isModalVisible}
        handleDecline={handleDecline}
        handleSaveAccount={methods.handleSubmit(handleSaveAccount)}
      />
    </FormProvider>
  );
};
