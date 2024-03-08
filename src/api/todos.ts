import axios from "axios";
import { Todo } from "@src/model/Todo";

const fetchTodos = async (): Promise<{ data: Todo[] }> => {
  const res = await axios.get(`http://localhost:4000/todos`);
  return res;
};

const addTodos = async (newTodo: Todo) => {
  return await axios.post(`http://localhost:4000/todos`, newTodo);
};

const deleteTodos = async (id: string) => {
  return await axios.delete(`http://localhost:4000/todos/${id}`);
};

const editTodos = async ({ id, isDone }: { id: string; isDone: boolean }) => {
  return await axios.patch(`http://localhost:4000/todos/${id}`, {
    isDone: !isDone,
  });
};

export { addTodos, deleteTodos, editTodos, fetchTodos };
