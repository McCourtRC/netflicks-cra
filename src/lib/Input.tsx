/** @jsxRuntime classic */
/** @jsx jsx */
import React, { HTMLProps } from 'react';
import { css, jsx } from '@emotion/react';

const Input = (props: HTMLProps<HTMLInputElement>) => {
  return (
    <input
      css={css`
        padding: 1rem;
        list-style: none;
      `}
      {...props}
    />
  );
};

export default Input;
