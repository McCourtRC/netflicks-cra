/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from 'react';
import { css, jsx } from '@emotion/react';

const List: FC = ({ children }) => {
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
