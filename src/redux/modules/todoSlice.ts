import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../../model/Todo";

// 슬라이스 상태에 대한 유형 정의
interface TodosState {
  todos: Todo[];
}

// 해당 유형을 사용하여 초기 상태 정의
const initialState: TodosState = {
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo: (state, action: PayloadAction<String>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    toggleTodo: (state, action: PayloadAction<String | boolean>) => {
      state.todos = state.todos.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        } else {
          item;
        }
      });
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo } = todosSlice.actions;

export default todosSlice.reducer;
