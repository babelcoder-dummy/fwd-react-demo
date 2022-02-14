import { createContext, Dispatch } from 'react';
import { AuthActions } from './models/AuthActions';
import { AuthState } from './models/AuthState';
import { initialState } from './reducer';

type AuthContextType = {
  state: AuthState;
  dispatch: Dispatch<AuthActions>;
};

const AuthContext = createContext<AuthContextType>({
  state: initialState,
  dispatch: () => {},
});

export default AuthContext;
