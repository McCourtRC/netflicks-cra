/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react';
import { Todo } from 'types/todo';

interface Props {
  todo: Todo;
}

const TodoItem = ({ todo }: Props) => {
  return (
    <li
      css={css`
        padding: 1rem;
      `}
    >
      {todo.text}
    </li>
  );
};

export default TodoItem;
