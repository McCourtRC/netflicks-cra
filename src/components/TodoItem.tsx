import React from 'react';
import { Todo } from 'types/todo';
import styled from '@emotion/styled';
import Button from 'lib/Button';

const Item = styled.li`
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
  :nth-of-type(even) {
    background-color: #dff2f8;
  }
`;

interface Props {
  todo: Todo;
}

const TodoItem = ({ todo }: Props) => {
  const removeItem = (atIndex: string) => {
    console.log('REMOVE ITEM', atIndex);
  };

  return (
    <Item>
      <span>{todo.text}</span>
      <span>
        <Button onClick={() => removeItem(todo.text)}>X</Button>
      </span>
    </Item>
  );
};

export default TodoItem;
