import React from "react";
import { Todo } from "../model/Todo";
import styled from "styled-components";

export interface OwnProps {
  todo: Todo;
  deleteItem: (id: string) => void;
  toggleItem: (id: string, isDone: boolean) => void;
}

const TodoItem: React.FC<OwnProps> = ({ todo, deleteItem, toggleItem }) => {
  const { id, title, content, isDone } = todo;

  const selectDeleteItem = () => {
    alert("삭제하시겠습니까?");
    deleteItem(id);
  };

  const selectToggleItem = () => {
    alert("상태변경하시겠습니까?");
    toggleItem(id, isDone);
  };

  return (
    <>
      <TodoItemWrap>
        <div>제목: {title}</div>
        <div>내용: {content}</div>
        <div>
          <button onClick={selectDeleteItem}>삭제하기</button>
          <button onClick={selectToggleItem}>
            {isDone ? "취소하기" : "완료하기"}
          </button>
        </div>
      </TodoItemWrap>
    </>
  );
};

export default TodoItem;

const TodoItemWrap = styled.div`
  border: 1px solid black;
  width: 350px;
  height: 200px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 1rem;
`;
