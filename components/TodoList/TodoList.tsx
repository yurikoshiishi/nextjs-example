import React from 'react';
import useSWR, { mutate } from 'swr';
import { addTodo, fetchTodos, Todo } from '../../api/todos';

interface TodoListProps {}

const TODO_KEY = 'todos';

const TodoList: React.FC<TodoListProps> = ({}) => {
  const { data } = useSWR(TODO_KEY, fetchTodos);

  if (!data) {
    return <div>Loading...</div>;
  }

  const handleAdd = async () => {
    const todo: Todo = {
      completed: true,
      id: 23095205,
      title: 'This is added by mutation',
      userId: 1,
    };

    mutate(TODO_KEY, [todo, ...data], false);

    const res = await addTodo(todo);

    //NOTE: since json placeholder does not update underlying data, this will revert data
    // mutate(TODO_KEY);
    console.log(res);
  };

  return (
    <>
      <button onClick={handleAdd}>Add Todo</button>
      <ul>
        {data &&
          Array.isArray(data) &&
          data.map((todo) => <li key={todo.id}>{todo.title}</li>)}
      </ul>
    </>
  );
};

export default TodoList;
