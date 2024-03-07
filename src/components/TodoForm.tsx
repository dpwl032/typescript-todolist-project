import React from "react";
import { useState, useEffect } from "react";
import { Todo } from "../model/Todo";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

const TodoForm = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    console.log("todos", todos);
  }, [todos]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;

    if (name === "title") {
      setTitle(value);
    }
    if (name === "content") {
      setContent(value);
    }
  };

  const newTodo: Todo = {
    id: uuidv4(),
    title,
    content,
    isDone: false,
  };

  const onClickHandler = () => {
    setTodos([...todos, newTodo]);
    setTitle("");
    setContent("");
  };

  return (
    <>
      제목 :{" "}
      <input type="text" name="title" value={title} onChange={onChange} />
      내용 :{" "}
      <input type="text" name="content" value={content} onChange={onChange} />
      <button onClick={onClickHandler}>등록</button>
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
};

export default TodoForm;
