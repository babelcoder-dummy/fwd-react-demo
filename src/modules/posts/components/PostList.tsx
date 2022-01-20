import { Grid } from '@mui/material';
import { Post } from '../models/Post';
import useFetch from 'modules/shared/hooks/useFetch';
import { Outlet } from 'react-router-dom';
import ListView from 'modules/shared/components/ListView';

const PostList = () => {
  const { data: posts, isLoading } = useFetch<Post[]>('/posts');

  return (
    <Grid container>
      <Grid item xs={12} lg={4}>
        <ListView
          isLoading={isLoading}
          data={posts}
          primary="title"
          secondary="id"
          to={({ id }) => `/posts/${id}`}
        />
      </Grid>
      <Grid item xs={12} lg={8}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default PostList;
