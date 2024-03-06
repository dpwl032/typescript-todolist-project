import React from "react";
import { useState } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todoSlice";
import { AppDispatch } from "../redux/config/configStore";
import { useAppSelector } from "../app/hooks";

const TodoForm = () => {
  const todos = useAppSelector((state) => state.todos.todos);
  const useAppDispatch = () => useDispatch<AppDispatch>();
  const dispatch = useAppDispatch();
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

  const onClickHandler = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        title,
        content,
        isDone: false,
      })
    );

    setTitle("");
    setContent("");
  };

  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

  return (
    <>
      제목 :{" "}
      <input type="text" name="title" value={title} onChange={onChange} />
      내용 :{" "}
      <input type="text" name="content" value={content} onChange={onChange} />
      <button onClick={onClickHandler}>등록</button>
      <div>Working</div>
      <TodoList todos={workingTodos} />
      <br />
      <br />
      <br />
      <div>Done</div>
      <TodoList todos={doneTodos} />
    </>
  );
};

export default TodoForm;
