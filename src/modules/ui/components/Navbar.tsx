import { AppBar, Toolbar, Container, Box, Button } from '@mui/material';
import useAuth from 'modules/auth/hooks/useAuth';
import NavLink from './NavLink';

function Navbar() {
  const { logout, username, isLoggedIn } = useAuth();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NavLink to="/posts">Posts</NavLink>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/todos">Todos</NavLink>
          <NavLink to="/auth/login">Login</NavLink>
          {isLoggedIn() && (
            <Box sx={{ ml: 'auto' }}>
              <Button color="inherit" onClick={logout}>
                {username}
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
