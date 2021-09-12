import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { View } from 'react-native';
import { BreadcrumbSection } from '../components/organisms/BreadcrumbSection';
import { FormSection } from '../components/organisms/FormSection';
import { UserContext } from '../contexts/userContext';
import { saveItems } from '../libs/firestore';
import { HOUSEHOLD_ACCOUNTS_ROUTE } from '../navigation/constant';
import { Item } from '../types/item';
import { AuthScreenNavigationProp } from '../types/navigation';

export type RegusterAccountItemFormData = {
  items: Array<Item>;
};

export const RegisterAccountItemScreen: React.FC = () => {
  const navigation = useNavigation<AuthScreenNavigationProp>();
  const methods = useForm({ defaultValues: { items: [{ name: '' }] } });
  const { user } = useContext(UserContext);
  const onSubmit = async (data: RegusterAccountItemFormData) => {
    await saveItems(data, user);
    navigation.navigate(HOUSEHOLD_ACCOUNTS_ROUTE);
  };
  return (
    <View>
      <BreadcrumbSection flowDepth={1} />
      <FormProvider {...methods}>
        <FormSection onSubmit={methods.handleSubmit(onSubmit)} />
      </FormProvider>
    </View>
  );
};
