import React from 'react';
import { render, screen } from 'utils/test';
import TodoList from './TodoList';
import userEvent from '@testing-library/user-event';

describe('<TodoList />', () => {
  it('should render an input element', () => {
    render(<TodoList />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('should render a new list item onSubmit', () => {
    render(<TodoList />);
    expect(screen.queryByText('New Item')).not.toBeInTheDocument();

    const input = screen.getByRole('textbox');
    userEvent.type(input, 'New Item{enter}');

    expect(screen.queryByText('New Item')).toBeInTheDocument();
  });

  it('should remove a list item when clicking the delete button', () => {
    render(<TodoList />);

    const input = screen.getByRole('textbox');
    userEvent.type(input, 'New Item{enter}');

    expect(screen.queryByText('New Item')).toBeInTheDocument();

    const deleteBtn = screen.getByRole('button');
    userEvent.click(deleteBtn);

    expect(screen.queryByText('New Item')).not.toBeInTheDocument();
  });
});
