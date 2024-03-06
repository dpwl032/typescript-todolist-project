import React from "react";
import { OwnProps } from "../model/Todo";
import TodoItem from "./TodoItem";

const TodoList: React.FC<OwnProps> = ({ todos, setTodos }) => {
  const deleteItem = (id: string) => {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };

  const toggleItem = (id: string) => {
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        return { ...item, isDone: !item.isDone };
      }
      return item;
    });

    setTodos(newTodos);
    console.log(newTodos);
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
