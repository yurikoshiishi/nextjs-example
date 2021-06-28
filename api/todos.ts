import { fetcher, postFetcher } from '../utils';

const baseURL = 'https://jsonplaceholder.typicode.com';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const fetchTodos = async () => {
  const todos = await fetcher<Todo[]>(`${baseURL}/todos`);
  return todos;
};

export const addTodo = async (todo: Todo) => {
  const addedTodo = await postFetcher(`${baseURL}/todos`, todo);
  return addedTodo;
};
