import { configureStore } from "@reduxjs/toolkit";
import todos from "../modules/todoSlice";

const store = configureStore({
  reducer: {
    todos: todos,
  },
});

// store.dispatch의 타입을 사용하기 편리하도록 미리 정의
export type AppDispatch = typeof store.dispatch;
//store.getState의 반환값 타입을 type으로 사용하며 state를 select할 때 state 타입을 정의하는데 사용
export type RootState = ReturnType<typeof store.getState>;

export default store;
