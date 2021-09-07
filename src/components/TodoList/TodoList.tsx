import React, { FormEvent } from 'react';
import { Todo } from 'types/todo';
import TodoItem from 'components/TodoItem/TodoItem';
import List from 'lib/List';
import Input from 'lib/Input';
import useTodos from 'hooks/useTodos';
import useInput from 'hooks/useInput';

const TodoList = () => {
  const [input, onChange, resetInput] = useInput();
  const { todos, addTodo, removeTodo } = useTodos();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo: Todo = { text: input };

    addTodo(newTodo);
    resetInput();
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
        <Input type='text' value={input} onChange={onChange} />
      </form>
    </div>
  );
};

export default TodoList;
