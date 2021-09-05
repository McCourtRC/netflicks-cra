import React, { ChangeEvent, FormEvent, useState } from 'react';
import { append, remove } from 'ramda';
import { Todo } from 'types/todo';
import TodoItem from 'components/TodoItem';
import List from 'lib/List';
import Input from 'lib/Input';

const TodoList = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo: Todo = { text: input };

    setTodos(append(newTodo, todos));
    setInput('');
  };

  const removeTodo = (atIndex: number) => {
    setTodos(remove(atIndex, 1, todos));
  };

  return (
    <div>
      <List>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            onDelete={() => removeTodo(index)}
          />
        ))}
      </List>
      <form onSubmit={addTodo}>
        <Input
          data-testid='todo-input'
          type='text'
          value={input}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
        />
      </form>
    </div>
  );
};

export default TodoList;
