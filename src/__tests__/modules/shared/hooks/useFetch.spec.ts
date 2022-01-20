import { renderHook } from '@testing-library/react-hooks';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import useFetch from 'modules/shared/hooks/useFetch';

type MyMock = {
  foo: string;
};

const server = setupServer();

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

test('fetch URL correctly', async () => {
  const resData: MyMock[] = [{ foo: 'bar' }];

  server.use(
    rest.get(
      `${process.env['REACT_APP_API_URL']}/my-mock`,
      (_req, res, ctx) => {
        return res(ctx.status(200), ctx.json(resData));
      }
    )
  );
  const { result, waitForNextUpdate } = renderHook(() =>
    useFetch<MyMock[]>('/my-mock', [])
  );

  expect(result.current.data).toEqual([]);
  expect(result.current.isLoading).toBeTruthy();

  await waitForNextUpdate();

  expect(result.current.data).toEqual(resData);
  expect(result.current.isLoading).toBeFalsy();
});
