import React, { FC } from 'react';
import { Todo } from 'types/todo';

interface Props {
  todo: Todo;
}

const TodoItem: FC<Props> = ({ todo }) => {
  return <li>{todo.text}</li>;
};

export default TodoItem;
