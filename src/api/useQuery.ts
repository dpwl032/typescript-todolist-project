// // export const useTodosQuery = useQuery<Todo[]>([QUERY_KEYS.TODOS], getTodos);
// // // 사용 => const {isLoading , isError, data} = useTodosQuery();

// import { fetchTodos } from "./todos";

// export const useTodosQuery = useQuery({
//   queryKey: ["todos"],
//   queryFn: fetchTodos,
//   select: (data) => data.data,
// });

// const { isPending, error, data } = useTodosQuery();
