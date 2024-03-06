import React from "react";
import { OwnProps } from "../model/Todo";
import TodoItem from "./TodoItem";
import { useAppDispatch } from "../app/hooks";
import { deleteTodo } from "../redux/modules/todoSlice";
import { toggleTodo } from "../redux/modules/todoSlice";

const TodoList: React.FC<OwnProps> = ({ todos }) => {
  const dispatch = useAppDispatch();

  const deleteItem = (id: string) => {
    dispatch(deleteTodo(id));
  };

  const toggleItem = (id: string) => {
    dispatch(toggleTodo(id));
  };

  return (
    <>
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          todo={item}
          deleteItem={deleteItem}
          toggleItem={toggleItem}
        />
      ))}
    </>
  );
};

export default TodoList;
