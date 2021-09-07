import React from 'react';
import { Todo } from 'types/todo';
import TodoItem from 'components/TodoItem/TodoItem';
import List from 'lib/List';
import Input from 'lib/Input';
import useTodos from 'hooks/useTodos';
import useInput from 'hooks/useInput';
import useSubmit from 'hooks/useSubmit';

const TodoList = () => {
  const { todos, addTodo, removeTodo } = useTodos();
  const [input, onChangeInput, resetInput] = useInput();
  const onSubmit = useSubmit(() => {
    const newTodo: Todo = { text: input };

    addTodo(newTodo);
    resetInput();
  });

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
      <form onSubmit={onSubmit}>
        <Input type='text' value={input} onChange={onChangeInput} />
      </form>
    </div>
  );
};

export default TodoList;
