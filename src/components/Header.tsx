import styled from '@emotion/styled';
import { Theme } from '@emotion/react';
import React from 'react';

const Container = styled.header`
  background-color: lightblue;
`;

const Logo = styled.h1`
  margin: auto;
  padding: 1rem;
  max-width: 760px;
  color: ${({ theme }: { theme: Theme }) => theme.colors.primary};
`;

const Header = () => {
  return (
    <Container>
      <Logo>Net Flicks</Logo>
    </Container>
  );
};

export default Header;
