export interface Todo {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
}

export interface OwnProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export interface Edit {
  id: string;
  isDone: boolean;
}
