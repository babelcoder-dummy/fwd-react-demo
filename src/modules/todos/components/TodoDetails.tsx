import useFetch from 'modules/shared/hooks/useFetch';
import { useParams } from 'react-router-dom';
import { Todo } from '../models/Todo';

const TodoDetails = () => {
  const { id } = useParams();
  const { data: todo } = useFetch<Todo>(`/todos/${id}`);

  return (
    <dl>
      <dt>ID:</dt>
      <dd>{todo?.id}</dd>
      <dt>User ID:</dt>
      <dd>{todo?.userId}</dd>
      <dt>Title:</dt>
      <dd>{todo?.title}</dd>
      <dt>Completed:</dt>
      <dd>{todo?.completed}</dd>
    </dl>
  );
};

export default TodoDetails;
