import React, { FC } from 'react';
import { Todo } from 'types';
import TodoItem from 'components/TodoItem';

interface Props {
  todos: Todo[];
}

const TodoList: FC<Props> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
