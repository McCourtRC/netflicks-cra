import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Todo } from 'types/todo';
import TodoItem from 'components/TodoItem/TodoItem';
import List from 'lib/List';
import Input from 'lib/Input';
import useTodos from 'hooks/useTodos';

const TodoList = () => {
  const [input, setInput] = useState('');
  const { todos, addTodo, removeTodo } = useTodos();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo: Todo = { text: input };

    addTodo(newTodo);
    setInput('');
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
      <form onSubmit={handleSubmit}>
        <Input
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
