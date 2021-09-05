import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';
import userEvent from '@testing-library/user-event';

describe('<TodoList />', () => {
  it('should have an input element', () => {
    render(<TodoList />);
    const input = screen.getByTestId('todo-input');
    expect(input).toBeInTheDocument();
  });
  it('should add a new list item onSubmit', () => {
    render(<TodoList />);
    expect(screen.queryByText('New Item')).not.toBeInTheDocument();

    const input = screen.getByTestId('todo-input');
    userEvent.type(input, 'New Item{enter}');

    expect(screen.queryByText('New Item')).toBeInTheDocument();
  });
  it('should remove a list item when clicking the delete button', () => {
    render(<TodoList />);

    const input = screen.getByTestId('todo-input');
    userEvent.type(input, 'New Item{enter}');

    expect(screen.queryByText('New Item')).toBeInTheDocument();

    const deleteBtn = screen.getByTestId('todo-delete');
    userEvent.click(deleteBtn);

    expect(screen.queryByText('New Item')).not.toBeInTheDocument();
  });
});
