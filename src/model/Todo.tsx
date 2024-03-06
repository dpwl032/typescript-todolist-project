export interface Todo {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
}

export interface OwnProps {
  todos: Todo[];
}
