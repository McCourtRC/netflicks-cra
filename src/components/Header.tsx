import React from 'react';
import styled from '@emotion/styled';
import { Color } from 'types/theme';

const Container = styled.header`
  background-color: ${Color.secondary};
`;

const Logo = styled.h1`
  margin: auto;
  padding: 1rem;
  max-width: 760px;
  color: ${Color.primary};
`;

const Header = () => {
  return (
    <Container>
      <Logo>Net Flicks</Logo>
    </Container>
  );
};

export default Header;
