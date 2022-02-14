import useAuth from 'modules/auth/hooks/useAuth';
import AuthProvider from 'modules/auth/AuthProvider';
import { act, renderHook } from '@testing-library/react-hooks';

describe('useAuth', () => {
  it('returns initial state correctly', () => {
    const { result } = renderHook(() => useAuth(), { wrapper: AuthProvider });

    expect(result.current.token).toBeUndefined();
    expect(result.current.username).toBeUndefined();
  });

  it('handles login process correctly', () => {
    const { result } = renderHook(() => useAuth(), { wrapper: AuthProvider });

    act(() => {
      result.current.login();
    });

    expect(result.current.token).toBe('token');
    expect(result.current.username).toBe('FWD');
    expect(result.current.isLoggedIn()).toBeTruthy();
  });

  it('handles logout process correctly', () => {
    const { result } = renderHook(() => useAuth(), { wrapper: AuthProvider });

    act(() => {
      result.current.logout();
    });

    expect(result.current.token).toBeUndefined();
    expect(result.current.username).toBeUndefined();
    expect(result.current.isLoggedIn()).toBeFalsy();
  });
});
