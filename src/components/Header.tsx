import React from 'react';
import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';

const Container = styled.header(
  ({ theme }: { theme: Theme }) => css`
    background-color: ${theme.colors.secondary};
  `
);

const Logo = styled.h1(
  ({ theme }: { theme: Theme }) => css`
    margin: auto;
    padding: 1rem;
    max-width: 760px;
    color: ${theme.colors.primary};
  `
);

const Header = () => {
  return (
    <Container>
      <Logo>Net Flicks</Logo>
    </Container>
  );
};

export default Header;
