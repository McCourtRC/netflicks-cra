import React from 'react';
import Header from 'components/Header';
import TodoList from 'components/TodoList/TodoList';
import styled from '@emotion/styled';

const Container = styled.div`
  margin: auto;
  max-width: 760px;
`;

const App = () => {
  return (
    <div>
      <Header />
      <Container>
        <TodoList />
      </Container>
    </div>
  );
};

export default App;
