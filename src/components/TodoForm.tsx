import React from "react";
import { useState } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "../model/Todo";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTodos } from "../api/todos";
import styled from "styled-components";

const TodoForm = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const queryClient = useQueryClient();

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

  const addTodoMutation = useMutation({
    mutationFn: addTodos,
    onMutate() {},
    onSuccess(data) {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      console.log(data);
    },
    onError(err) {
      console.log(err);
    },
  });

  const onClickHandler = async (): Promise<void> => {
    const newTodo: Todo = {
      id: uuidv4(),
      title,
      content,
      isDone: false,
    };
    addTodoMutation.mutate(newTodo);
    setTitle("");
    setContent("");
  };

  return (
    <>
      <TodoFormWrap>
        <div style={{ maxWidth: "1200px", minWidth: "800px" }}>
          <InputWrap>
            제목 :{" "}
            <input type="text" name="title" value={title} onChange={onChange} />
            내용 :{" "}
            <input
              type="text"
              name="content"
              value={content}
              onChange={onChange}
            />
            <button onClick={onClickHandler}>등록</button>
          </InputWrap>

          <TodoList />
        </div>
      </TodoFormWrap>
    </>
  );
};

export default TodoForm;

const TodoFormWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 1500px;
  justify-content: center;
  align-items: center;
`;

const InputWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
