import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { View } from 'react-native';
import { BreadcrumbSection } from '../components/organisms/BreadcrumbSection';
import { FormSection } from '../components/organisms/FormSection';

export type FormData = {
  item: string;
};
export const RegisterAccountItemScreen: React.FC = () => {
  const methods = useForm({ defaultValues: { items: [{ item: '' }] } });
  const onSubmit = (data: FormData) => console.warn(data);
  return (
    <View>
      <BreadcrumbSection flowDepth={1} />
      <FormProvider {...methods}>
        <FormSection onSubmit={methods.handleSubmit(onSubmit)} />
      </FormProvider>
    </View>
  );
};
