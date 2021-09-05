import React from 'react';
import { Todo } from 'types/todo';
import styled from '@emotion/styled';
import Button from 'lib/Button';

const Item = styled.li`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  :nth-child(even) {
    background-color: lightblue;
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
