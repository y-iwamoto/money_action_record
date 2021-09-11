import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { ModalSection } from '../components/organisms/ModalSection';
import { saveExpense } from '../libs/firestore';
import { HOUSEHOLD_ACCOUNTS_ROUTE } from '../navigation/constant';

type ModalProps = {
  isModalVisible: boolean;
  handleDecline: () => void;
  handleSaveAccount: () => void;
};

export const ModalScreen: React.FC<ModalProps> = () => {

  const [isModalVisible, setIsModalVisible] = useState(true);
  const route = useRoute();
  const expense = route.params;

  const methods = useForm({ defaultValues: { amount: (expense && expense.amount) ? expense.amount : '0' } });
  const navigation = useNavigation();
  const handleDecline = () => {
    setIsModalVisible(false);
    navigation.navigate(HOUSEHOLD_ACCOUNTS_ROUTE);
  };

  const handleSaveAccount = async (data) => {
    await saveExpense(Object.assign(expense, data));
    navigation.navigate(HOUSEHOLD_ACCOUNTS_ROUTE);
  };
  return(
    <FormProvider {...methods}>
      <ModalSection isModalVisible={isModalVisible} handleDecline={handleDecline} 
        handleSaveAccount={methods.handleSubmit(handleSaveAccount)} />
    </FormProvider>
  );

};
