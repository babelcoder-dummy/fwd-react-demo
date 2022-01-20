import { CssBaseline, Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Box sx={{ p: 1 }}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
