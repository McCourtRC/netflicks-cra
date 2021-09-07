import { ChangeEventHandler, useState } from 'react';

const useInput = (
  initialVal = ''
): [
  value: string,
  onChangeValue: ChangeEventHandler<HTMLInputElement>,
  resetValue: () => void
] => {
  const [value, setValue] = useState(initialVal);

  const onChangeValue: ChangeEventHandler<HTMLInputElement> = (e) =>
    setValue(e.target.value);

  const resetValue = () => setValue(initialVal);

  return [value, onChangeValue, resetValue];
};

export default useInput;
