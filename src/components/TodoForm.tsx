import React from "react";
import { useState } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { Todo } from "../model/Todo";
import { useEffect } from "react";

const TodoForm = () => {
  const [todos, setTodos] = useState<Todo>([]);
  const fetchTodos = async (): Promise<void> => {
    try {
      const { data } = await axios.get("http://localhost:4000/todos");
      setTodos(data);
    } catch (error) {
      console.log("에러 발생:", error.message);
    }
  };

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
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

  const onClickHandler = async (): Promise<void> => {
    const newTodo: Todo = {
      id: uuidv4(),
      title,
      content,
      isDone: false,
    };

    try {
      await axios.post("http://localhost:4000/todos", newTodo);
      setTodos([...todos, newTodo]);
      setTitle("");
      setContent("");
    } catch (error) {
      console.log("추가 에러 발생:", error.message);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, [todos]);

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
