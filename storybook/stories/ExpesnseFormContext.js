import React from 'react';
import PropTypes from 'prop-types';
import { useForm, FormProvider } from 'react-hook-form';

export default function ExpesnseFormContext({ children }) {
    const methods = useForm({
        defaultValues: { amount: '0' },
      });

  return <FormProvider {...methods}>{children}</FormProvider>;
}

ExpesnseFormContext.defaultProps = {
  children: null,
};

ExpesnseFormContext.propTypes = {
  children: PropTypes.node,
};
