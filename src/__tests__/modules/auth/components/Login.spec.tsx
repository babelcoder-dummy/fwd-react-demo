import Login from 'modules/auth/components/Login';
import { render, screen, waitFor, within } from '@testing-library/react';
import AuthProvider from 'modules/auth/AuthProvider';
import userEvent from '@testing-library/user-event';

describe('Login', () => {
  it('handles login and logout process correctly', async () => {
    render(
      <AuthProvider>
        <Login></Login>
      </AuthProvider>
    );

    const loginBtn = screen.getByRole('button', { name: 'Login' });
    expect(loginBtn).toBeInTheDocument();

    userEvent.click(loginBtn);
    expect(
      await screen.findByRole('button', { name: 'Logout' })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: 'Login' })
    ).not.toBeInTheDocument();
  });
});
