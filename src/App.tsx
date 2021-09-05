import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { Todo } from 'types/todo';
import { theme } from 'theme';
import Header from 'components/Header';
import TodoList from 'components/TodoList';

const mockTodos: Todo[] = [
  { text: 'Apply' },
  { text: 'Slay the interview' },
  { text: 'Get Hired' },
];

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Header />
        <TodoList todos={mockTodos} />
      </div>
    </ThemeProvider>
  );
};

export default App;
