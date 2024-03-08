import axios from "axios";
import { Todo } from "@src/model/Todo";

const fetchTodos = async (): Promise<{ data: Todo[] }> => {
  const res = await axios.get(`${import.meta.env.VITE_TODO_SERVER}/todos`);
  return res;
};

const addTodos = async (newTodo: Todo) => {
  return await axios.post(`${import.meta.env.VITE_TODO_SERVER}/todos`, newTodo);
};

const deleteTodos = async (id: string) => {
  return await axios.delete(`${import.meta.env.VITE_TODO_SERVER}/todos/${id}`);
};

const editTodos = async ({ id, isDone }: { id: string; isDone: boolean }) => {
  return await axios.patch(`${import.meta.env.VITE_TODO_SERVER}/todos/${id}`, {
    isDone: !isDone,
  });
};

export { addTodos, deleteTodos, editTodos, fetchTodos };
