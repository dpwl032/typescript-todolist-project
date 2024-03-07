import React from "react";
import TodoItem from "./TodoItem";
import { useQuery } from "@tanstack/react-query";
import { fetchTodos, deleteTodos, editTodos } from "../api/todos";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { Todo } from "../model/Todo";
import { AxiosResponse } from "axios";

const TodoList: React.FC = () => {
  const queryClient = useQueryClient();

  const deleteTodomutation = useMutation<
    AxiosResponse<Todo[]>,
    Error,
    string,
    void
  >({
    mutationFn: deleteTodos,
    onMutate() {},
    onSuccess(data) {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      console.log(data);
    },
    onError(err) {
      console.log(err);
    },
  });

  const editTodomutation = useMutation<
    AxiosResponse<Todo[]>,
    Error,
    string,
    unknown
  >({
    mutationFn: editTodos,
    onMutate() {},
    onSuccess(data) {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      console.log(data);
    },
    onError(err) {
      console.log(err.message);
    },
  });

  const { isPending, error, data } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    select: (data) => data.data,
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + console.log(error.message);

  const deleteItem = async (id: string): Promise<void> => {
    deleteTodomutation.mutate(id);
  };

  const toggleItem = async (id: string, isDone: boolean): Promise<void> => {
    editTodomutation.mutate(id, isDone);
  };

  return (
    <>
      <div>working</div>
      {data?.map((item) => {
        return !item.isDone ? (
          <TodoItem
            key={item.id}
            todo={item}
            deleteItem={deleteItem}
            toggleItem={toggleItem}
          />
        ) : null;
      })}
      <div>Done</div>
      {data?.map((item) => {
        return item.isDone ? (
          <TodoItem
            key={item.id}
            todo={item}
            deleteItem={deleteItem}
            toggleItem={toggleItem}
          />
        ) : null;
      })}
    </>
  );
};

export default TodoList;
