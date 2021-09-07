import { ChangeEventHandler, useState } from 'react';

const useInput = (
  initialVal = ''
): [
  value: string,
  onChange: ChangeEventHandler<HTMLInputElement>,
  reset: () => void
] => {
  const [value, setValue] = useState(initialVal);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setValue(e.target.value);

  const reset = () => setValue(initialVal);

  return [value, onChange, reset];
};

export default useInput;
