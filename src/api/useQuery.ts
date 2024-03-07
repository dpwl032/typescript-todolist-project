import { useQuery } from "@tanstack/react-query";
import { getTodos } from "@src/api/todos";
import { Todo } from "@src/model/Todo";
import { TODOS } from "../hooks/keys.constant";

// export const useTodosQuery = useQuery<Todo[]>([QUERY_KEYS.TODOS], getTodos);

// // 사용 => const {isLoading , isError, data} = useTodosQuery();
