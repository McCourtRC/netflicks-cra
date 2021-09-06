import React from 'react';
import { render, screen } from 'utils/test';
import TodoItem from './TodoItem';
import { Todo } from 'types/todo';

describe('<TodoItem />', () => {
  it('renders Todo information', () => {
    const mockTodo: Todo = {
      text: 'todo text',
    };
    const onDelete = jest.fn();
    render(<TodoItem todo={mockTodo} onDelete={onDelete} />);

    expect(screen.queryByText('todo text')).toBeInTheDocument();
  });
});
