/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react';

const Header = () => {
  return (
    <header>
      <h1
        css={css`
          color: #e50914;
        `}
      >
        Net Flicks
      </h1>
    </header>
  );
};

export default Header;
