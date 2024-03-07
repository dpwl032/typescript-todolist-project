import React from "react";
import { OwnProps } from "../model/Todo";
import TodoItem from "./TodoItem";

const TodoList: React.FC<OwnProps> = ({ todos, setTodos }) => {
  const deleteItem = (id: string) => {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };

  const toggleItem = (id: string) => {
    setTodos(function (prev) {
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, isDone: !item.isDone };
        }
        return item;
      });
    });
  };

  return (
    <>
      <div>working</div>
      {todos.map((item) => {
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
      {todos.map((item) => {
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
