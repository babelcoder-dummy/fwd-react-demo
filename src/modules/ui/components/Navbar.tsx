import { AppBar, Toolbar, Container } from '@mui/material';
import NavLink from './NavLink';

function Navbar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NavLink to="/posts">Posts</NavLink>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/todos">Todos</NavLink>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
