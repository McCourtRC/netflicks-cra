/** @jsxRuntime classic */
/** @jsx jsx */
import React, { ReactNode } from 'react';
import { css, jsx } from '@emotion/react';

interface Props {
  children: ReactNode;
}

const List = ({ children }: Props) => {
  return (
    <ul
      css={css`
        margin: 0;
        padding: 0;
        list-style: none;
      `}
    >
      {children}
    </ul>
  );
};

export default List;
