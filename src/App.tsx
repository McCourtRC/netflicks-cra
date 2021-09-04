import React from 'react';
import TodoList from 'components/TodoList';

const mockTodos = [
  { text: 'Apply' },
  { text: 'Slay the interview' },
  { text: 'Get Hired' },
];

const App = () => {
  return (
    <div className='App'>
      <h1>Net Flicks</h1>
      <TodoList todos={mockTodos} />
    </div>
  );
};

export default App;
