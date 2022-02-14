import { AuthState } from 'modules/auth/models/AuthState';
import reducer from 'modules/auth/reducer';

describe('Auth Reducer', () => {
  it('returns initial state when an incomming action is logout type', () => {
    const state = { token: 'My Token', username: 'My Username' };

    expect(reducer(state, { type: 'Logout' })).toEqual({
      token: undefined,
      username: undefined,
    });
  });

  it('returns auth state when an incomming action is login type', () => {
    const state = { token: 'My Token', username: 'My Username' };

    expect(reducer(state, { type: 'Login', payload: state })).toEqual(state);
  });
});
