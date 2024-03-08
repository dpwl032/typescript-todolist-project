import React from "react";
import TodoItem from "./TodoItem";
import { useQuery } from "@tanstack/react-query";
import { fetchTodos, deleteTodos, editTodos } from "../api/todos";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { Todo } from "../model/Todo";
import { AxiosResponse } from "axios";
import styled from "styled-components";
import QUERY_KEYS from "../api/keys.constant";
import { EditTodo } from "../model/Todo";

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
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TODOS] });
      console.log(data);
    },
    onError(err) {
      console.log(err);
    },
  });

  const editTodomutation = useMutation({
    mutationFn: editTodos,
    onMutate() {},
    onSuccess(data) {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TODOS] });
      console.log(data);
    },
    onError(err) {
      console.log(err.message);
    },
  });

  const { isPending, error, data } = useQuery({
    queryKey: [QUERY_KEYS.TODOS],
    queryFn: fetchTodos,
    select: (data) => data.data,
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + console.log(error.message);

  const deleteItem = async (id: string): Promise<void> => {
    deleteTodomutation.mutate(id);
  };

  const toggleItem = async (id: string, isDone: boolean): Promise<void> => {
    const editItem: EditTodo = { id, isDone };
    editTodomutation.mutate(editItem);
  };

  return (
    <>
      <TodoListWrap>
        <div>working</div>
        <div>
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
        </div>
        <div>Done</div>
        <div>
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
        </div>
      </TodoListWrap>
    </>
  );
};

export default TodoList;

const TodoListWrap = styled.div`
  border: 1px solid black;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
