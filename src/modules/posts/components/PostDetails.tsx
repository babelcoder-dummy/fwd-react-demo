import useFetch from 'modules/shared/hooks/useFetch';
import { useParams } from 'react-router-dom';
import { Post } from '../models/Post';

const PostDetails = () => {
  const { id } = useParams();
  const { data: post } = useFetch<Post>(`/posts/${id}`);

  return (
    <dl>
      <dt>ID:</dt>
      <dd>{post?.id}</dd>
      <dt>User ID:</dt>
      <dd>{post?.userId}</dd>
      <dt>Title:</dt>
      <dd>{post?.title}</dd>
      <dt>Body:</dt>
      <dd>{post?.body}</dd>
    </dl>
  );
};

export default PostDetails;
