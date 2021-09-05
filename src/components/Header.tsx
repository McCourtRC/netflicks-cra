/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { css, jsx, useTheme } from '@emotion/react';

const Header = () => {
  const {
    colors: { primary },
  } = useTheme();

  return (
    <header
      css={css`
        padding: 1rem;
        background-color: #cbd5e1;
      `}
    >
      <h1
        css={css`
          margin: 0;
          color: ${primary};
        `}
      >
        Net Flicks
      </h1>
    </header>
  );
};

export default Header;
