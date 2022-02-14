import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostList from 'modules/posts/components/PostList';
import UserList from 'modules/users/components/UserList';
import TodoList from 'modules/todos/components/TodoList';
import Layout from 'modules/ui/components/Layout';
import UserDetails from 'modules/users/components/UserDetails';
import PostDetails from 'modules/posts/components/PostDetails';
import Welcome from 'modules/ui/components/Welcome';
import axios from 'axios';
import Login from 'modules/auth/components/Login';

axios.defaults.baseURL = process.env['REACT_APP_API_URL'];

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Welcome />}></Route>
          <Route path="auth/login" element={<Login />}></Route>
          <Route path="posts" element={<PostList />}>
            <Route path=":id" element={<PostDetails />}></Route>
          </Route>
          <Route path="users" element={<UserList />}></Route>
          <Route path="users/:id" element={<UserDetails />}></Route>
          <Route path="todos" element={<TodoList />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
