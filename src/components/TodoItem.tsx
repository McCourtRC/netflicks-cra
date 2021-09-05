import React from 'react';
import { Todo } from 'types/todo';
import styled from '@emotion/styled';

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
        <button onClick={() => removeItem(todo.text)}>X</button>
      </span>
    </Item>
  );
};

export default TodoItem;
