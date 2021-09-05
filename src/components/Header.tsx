/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { css, jsx, useTheme } from '@emotion/react';

const Header = () => {
  const {
    colors: { primary },
    breakpoints: { md },
  } = useTheme();

  return (
    <header>
      <h1
        css={css`
          color: ${primary};
          ${md} {
            color: slateblue;
          }
        `}
      >
        Net Flicks
      </h1>
    </header>
  );
};

export default Header;
