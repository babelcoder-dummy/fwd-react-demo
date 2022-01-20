import useFetch from 'modules/shared/hooks/useFetch';
import { Todo } from '../models/Todo';
import ListView from 'modules/shared/components/ListView';

const TodoList = () => {
  const { data: todos, isLoading } = useFetch<Todo[]>('/todos');

  return (
    <ListView
      isLoading={isLoading}
      data={todos}
      primary="title"
      secondary="id"
      to={({ id }) => `/todos/${id}`}
    />
  );
};

export default TodoList;
