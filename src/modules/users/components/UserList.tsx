import { User } from '../models/User';
import useFetch from 'modules/shared/hooks/useFetch';
import ListView from 'modules/shared/components/ListView';

const UserList = () => {
  const { data: users, isLoading } = useFetch<User[]>('/users');

  return (
    <ListView
      isLoading={isLoading}
      data={users}
      primary="name"
      secondary="id"
      to={({ id }) => `/users/${id}`}
    />
  );
};

export default UserList;
