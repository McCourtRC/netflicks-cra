import React from 'react';
import { render, screen } from 'utils/test';
import TodoList from './TodoList';
import userEvent from '@testing-library/user-event';

describe('<TodoList />', () => {
  it('can add and remove a list item', () => {
    render(<TodoList />);

    expect(screen.queryByText('New Item')).not.toBeInTheDocument();

    // add list item with input
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'New Item{enter}');

    expect(screen.queryByText('New Item')).toBeInTheDocument();

    // delete list item with button
    const deleteBtn = screen.getByRole('button');
    userEvent.click(deleteBtn);

    expect(screen.queryByText('New Item')).not.toBeInTheDocument();
  });
});
