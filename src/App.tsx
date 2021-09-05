import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'theme';
import Header from 'components/Header';
import TodoList from 'components/TodoList';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Header />
        <TodoList />
      </div>
    </ThemeProvider>
  );
};

export default App;
