/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { css, jsx, useTheme } from '@emotion/react';

const Header = () => {
  const {
    colors: { primary },
  } = useTheme();

  return (
    <header>
      <h1
        css={css`
          color: ${primary};
        `}
      >
        Net Flicks
      </h1>
    </header>
  );
};

export default Header;
