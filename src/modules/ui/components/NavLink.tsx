import { Button } from '@mui/material';
import { ReactNode } from 'react';
import { Link, useMatch } from 'react-router-dom';

type NavLinkProps = {
  to: string;
  children: ReactNode;
};

function NavLink({ to, children }: NavLinkProps) {
  const matched = useMatch({ path: to, end: false });

  return (
    <Button
      variant="text"
      component={Link}
      to={to}
      sx={{ color: matched ? 'gold' : 'white' }}
    >
      {children}
    </Button>
  );
}

export default NavLink;
