import { AuthState } from './AuthState';

export const LOGIN_TYPE = 'Login';
export const LOGOUT_TYPE = 'Logout';

type Login = {
  type: typeof LOGIN_TYPE;
  payload: Required<{
    token: AuthState['token'];
    username: AuthState['username'];
  }>;
};

type Logout = {
  type: typeof LOGOUT_TYPE;
};

export type AuthActions = Login | Logout;
