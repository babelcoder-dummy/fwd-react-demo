import { Button } from '@mui/material';
import useAuth from 'modules/auth/hooks/useAuth';

const Login = () => {
  const { login, logout, isLoggedIn } = useAuth();

  return (
    <>
      {!isLoggedIn() && <Button onClick={login}>Login</Button>}
      {isLoggedIn() && <Button onClick={logout}>Logout</Button>}
    </>
  );
};

export default Login;
