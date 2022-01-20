import useFetch from 'modules/shared/hooks/useFetch';
import { useParams } from 'react-router-dom';
import { User } from '../models/User';

const UserDetails = () => {
  const { id } = useParams();
  const { data: user } = useFetch<User>(`/users/${id}`);

  return (
    <dl>
      <dt>ID:</dt>
      <dd>{user?.id}</dd>
      <dt>Name:</dt>
      <dd>{user?.name}</dd>
      <dt>Username:</dt>
      <dd>{user?.username}</dd>
      <dt>Email:</dt>
      <dd>{user?.email}</dd>
    </dl>
  );
};

export default UserDetails;
