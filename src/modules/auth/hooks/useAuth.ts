import { useContext } from 'react';
import AuthContext from '../AuthContext';
import * as actions from '../models/AuthActions';

const useAuth = () => {
  const { state, dispatch } = useContext(AuthContext);

  const login = () => {
    return dispatch({
      type: actions.LOGIN_TYPE,
      payload: { token: 'token', username: 'FWD' },
    });
  };

  const logout = () => dispatch({ type: actions.LOGOUT_TYPE });

  const isLoggedIn = () => Boolean(state.token);

  return { ...state, login, logout, isLoggedIn };
};

export default useAuth;
