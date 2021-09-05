import React, { FC } from 'react';
import { Todo } from 'types/todo';
import TodoItem from 'components/TodoItem';
import List from 'lib/List';

interface Props {
  todos: Todo[];
}

const TodoList: FC<Props> = ({ todos }) => {
  return (
    <List>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} />
      ))}
    </List>
  );
};

export default TodoList;
