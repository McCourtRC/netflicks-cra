import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'theme';
import Header from 'components/Header';
import TodoList from 'components/TodoList';
import styled from '@emotion/styled';

const Container = styled.div`
  margin: auto;
  max-width: 760px;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container>
        <TodoList />
      </Container>
    </ThemeProvider>
  );
};

export default App;
