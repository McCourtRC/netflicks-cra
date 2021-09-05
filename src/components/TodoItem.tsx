import React from 'react';
import { Todo } from 'types/todo';

interface Props {
  todo: Todo;
}

const TodoItem = ({ todo }: Props) => {
  return <li>{todo.text}</li>;
};

export default TodoItem;
