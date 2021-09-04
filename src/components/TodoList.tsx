import React from 'react';
import { Todo } from 'types';
import TodoItem from 'components/TodoItem';

interface Props {
  todos: Todo[];
}

const TodoList = ({ todos }: Props) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
