import { FormEventHandler } from 'react';

const useSubmit = (handler: () => void) => {
  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    handler();
  };

  return onSubmit;
};

export default useSubmit;
