import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitFor, within } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import TodoList from 'modules/todos/components/TodoList';
import { Todo } from 'modules/todos/models/Todo';

const server = setupServer();

describe('TodoList', () => {
  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  it('renders todo list correctly', async () => {
    const mockResponse: Todo[] = [
      { id: 1, userId: 1, title: 'Title#1', completed: true },
      { id: 2, userId: 2, title: 'Title#2', completed: false },
    ];

    server.use(
      rest.get(
        `${process.env['REACT_APP_API_URL']}/todos`,
        (_req, res, ctx) => {
          return res(ctx.status(200), ctx.json(mockResponse));
        }
      )
    );

    render(
      <MemoryRouter>
        <TodoList />
      </MemoryRouter>
    );

    await waitFor(() =>
      expect(screen.getAllByRole('link')).toHaveLength(mockResponse.length)
    );

    for (const { id, title } of mockResponse) {
      const link = screen.getByRole<HTMLLinkElement>('link', {
        name: `${title} ${id}`,
      });

      expect(new URL(link.href).pathname).toBe(`/todos/${id}`);
      expect(within(link).getByText(title)).toBeInTheDocument();
      expect(within(link).getByText(id)).toBeInTheDocument();
    }
  });
});
