import { render, screen, waitFor, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import UserList from 'modules/users/components/UserList';
import { User } from 'modules/users/models/User';
import api from 'modules/shared/api';

describe('UserList', () => {
  it('renders user list correctly', async () => {
    const mockResponse: User[] = [
      { id: 1, email: 'my1@email.com', name: 'Name#1', username: 'UserName#1' },
      { id: 2, email: 'my2@email.com', name: 'Name#2', username: 'UserName#2' },
    ];

    const spy = jest
      .spyOn(api, 'get')
      .mockResolvedValueOnce({ data: mockResponse });

    render(
      <MemoryRouter>
        <UserList />
      </MemoryRouter>
    );

    await waitFor(() =>
      expect(screen.getAllByRole('link')).toHaveLength(mockResponse.length)
    );

    expect(spy).toHaveBeenNthCalledWith(1, '/users');

    for (const { id, name } of mockResponse) {
      const link = screen.getByRole<HTMLLinkElement>('link', {
        name: `${name} ${id}`,
      });

      expect(new URL(link.href).pathname).toBe(`/users/${id}`);
      expect(within(link).getByText(name)).toBeInTheDocument();
      expect(within(link).getByText(id)).toBeInTheDocument();
    }
  });
});
