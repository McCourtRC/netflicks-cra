import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Todo } from 'types/todo';
import TodoItem from 'components/TodoItem';
import List from 'lib/List';
import Input from 'lib/Input';

const TodoList = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo: Todo = { text: todo };

    setTodos([...todos, newTodo]);
    setTodo('');
  };

  return (
    <List>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} />
      ))}
      <form onSubmit={addTodo}>
        <Input
          type='text'
          value={todo}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTodo(e.target.value)
          }
        />
      </form>
    </List>
  );
};

export default TodoList;
