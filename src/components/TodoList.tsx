import React from "react";
import { Edit, OwnProps } from "../model/Todo";
import TodoItem from "./TodoItem";
import axios from "axios";

const TodoList: React.FC<OwnProps> = ({ todos, setTodos }) => {
  const deleteItem = async (id: string): Promise<void> => {
    try {
      await axios.delete(`http://localhost:4000/todos/${id}`);
    } catch (error) {
      console.log("삭제 에러 발생:", error.message);
    }
  };

  const toggleItem = async (edit: Edit): Promise<Void> => {
    console.log("edit", edit);
    const { id, isDone } = edit;
    try {
      const res = await axios.patch(`http://localhost:4000/todos/${id}`, {
        isDone: !isDone,
      });
      console.log("res", res.data);
    } catch (error) {
      console.log("토글 에러 발생:", error.message);
    }
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
