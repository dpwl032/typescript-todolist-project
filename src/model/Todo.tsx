export interface Todo {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
}

export type EditTodo = Pick<Todo, "id" | "isDone">;
