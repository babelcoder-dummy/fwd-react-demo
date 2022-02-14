import { Reducer } from 'react';
import { AuthActions, LOGIN_TYPE, LOGOUT_TYPE } from './models/AuthActions';
import { AuthState } from './models/AuthState';

export const initialState: AuthState = {
  token: undefined,
  username: undefined,
};

const authReducer: Reducer<AuthState, AuthActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case LOGIN_TYPE:
      return action.payload;
    case LOGOUT_TYPE:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
