import { render, screen, waitFor, within } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import userEvent from '@testing-library/user-event';
import App from 'App';
import { Post } from 'modules/posts/models/Post';

const server = setupServer();

describe('PostList', () => {
  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  it('renders post list correctly', async () => {
    window.history.pushState({}, 'Test page', '/posts');
    const mockResponse: Post[] = [
      { id: 1, userId: 1, title: 'Title#1', body: 'Body#1' },
      { id: 2, userId: 2, title: 'Title#2', body: 'Body#2' },
    ];

    server.use(
      rest.get(
        `${process.env['REACT_APP_API_URL']}/posts`,
        (_req, res, ctx) => {
          return res(ctx.status(200), ctx.json(mockResponse));
        }
      )
    );

    render(<App />);

    await waitFor(() =>
      expect(screen.getAllByRole('link')).toHaveLength(mockResponse.length + 3)
    );

    for (const { id, title, body } of mockResponse) {
      const link = screen.getByRole('link', { name: `${title} ${id}` });

      expect(within(link).getByText(title)).toBeInTheDocument();
      expect(within(link).getByText(id)).toBeInTheDocument();

      server.use(
        rest.get(
          `${process.env['REACT_APP_API_URL']}/posts/${id}`,
          (_req, res, ctx) => {
            return res(
              ctx.status(200),
              ctx.json(mockResponse.find((post) => post.id === id))
            );
          }
        )
      );

      userEvent.click(link);
      await screen.findByText(body);
    }
  });
});
