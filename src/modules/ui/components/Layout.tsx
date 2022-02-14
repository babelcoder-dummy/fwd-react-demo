import { CssBaseline, Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import AuthProvider from 'modules/auth/AuthProvider';

const Layout = () => {
  return (
    <AuthProvider>
      <CssBaseline />
      <Navbar />
      <Box sx={{ p: 1 }}>
        <Outlet />
      </Box>
    </AuthProvider>
  );
};

export default Layout;
