import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { View } from 'react-native';
import { BreadcrumbSection } from '../components/organisms/BreadcrumbSection';
import { FormSection } from '../components/organisms/FormSection';
import { ItemsContext } from '../contexts/itemContext';
import { UserContext } from '../contexts/userContext';
import { saveItems } from '../libs/firestore';
import { HOUSEHOLD_ACCOUNTS_ROUTE } from '../navigation/constant';
import { Item } from '../types/item';
import { AuthScreenNavigationProp } from '../types/navigation';

export type RegusterAccountItemFormData = {
  items: Array<Item>;
};

export const RegisterAccountItemScreen: React.FC = () => {
  const { user } = useContext(UserContext);
  const { items } = useContext(ItemsContext);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    if (items.length !== 0) {
      setIsUpdate(true);
    }
  }, [items]);
  const itemList =
    items.length !== 0
      ? items.map((item) => ({ name: item.name, item_id: item.item_id }))
      : [{ name: '' }];
  const navigation = useNavigation<AuthScreenNavigationProp>();
  const methods = useForm({ defaultValues: { items: itemList } });
  const onSubmit = async (data: RegusterAccountItemFormData) => {
    if (data.items.length === 0) {
      alert('家計簿の項目は最低１項目は必要です');
      return;
    }
    await saveItems(data, user, isUpdate);
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
