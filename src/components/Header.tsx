import styled from '@emotion/styled';
import { Theme } from '@emotion/react';
import React from 'react';

const Container = styled.header`
  padding: 1rem;
  background-color: lightblue;
`;

const Logo = styled.h1`
  margin: 0;
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
