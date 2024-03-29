# Typescript 개인 과제

> 주제 : Todolist를 Typescript로 만들어 봅시다.

## 개발 기간

- 2024.03.07 ~ 08

## 개발 환경

- Environment : Visual Studio Code, vite
- Development : typescript, React
- DB : json-server

## 필수 구현 사항

- **Todo 항목 추가 하기**
  - 사용자가 새로운 Todo 항목을 입력하고 추가 할 수 있는 기능.
- **Todo 항목 목록 표시 기능**
  - 각 Todo 하목은 고유 식별자를 가짐
- **Todo 삭제 하기**
  - 삭제 시 사용자에게 삭제 확인 요청
- **Todo 완료 상태 표시 기능**
  - 사용자가 Todo 항목을 완료했음을 표시
- 제출을 위한 **GIT 관련 내용(중요)**
  - 본인이 선택하신 레벨에 맞는 branch명을 만들어주세요.
  - 여러 레벨을 구현하기 원하시는 분들은 branch명을 level1, level2 처럼 여러가지 브랜치를 만들어주시면 됩니다

## 선택 구현 사항

- 레벨1 : React 이용 Todolist ✅
- 레벨2 : RTK 이용 Todolist ✅
- 레벨3 : RTK + json-server 이용 Todolist ✅
- 레벨4 : RTK + redux thunk 이용 Todolist
- 레벨5 : RTK + react-query 이용 Todolist ✅

## Code block : 데이터 모델 정의

```ts
export interface Todo {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
}
```

```ts
export interface OwnProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
```

```ts
export type EditTodo = Pick<Todo, "id" | "isDone">;
```
