import React from 'react';
import PropTypes from 'prop-types';
import { useForm, FormProvider } from 'react-hook-form';

export default function FormContext({ children }) {
  const methods = useForm({ defaultValues: { items: [{ item: '' }] } });

  return <FormProvider {...methods}>{children}</FormProvider>;
}

FormContext.defaultProps = {
  children: null,
};

FormContext.propTypes = {
  children: PropTypes.node,
};
