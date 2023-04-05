import fetcher, { auth } from '.';

export const getBySkip = (skip: number, count: number, category: number = -1): RQueryResponse<MockLimitedPlaylist[]> =>
  fetcher.get(`/playlist/getBySkip?skip=${skip}&take=${count}&category=${category}`).then(res => ({
    data: res.data,
    statusCode: res.status,
  }));

export const getById = (id: number): RQueryResponse<MockPlaylist> =>
  fetcher.get(`/playlist/getById?id=${id}`, auth({})).then(res => ({
    data: res.data,
    statusCode: res.status,
  }));

export const toggleLike = ({ id }: { id: number }): RQueryResponse<undefined> =>
  fetcher.get(`/playlist/setLike?id=${id}`, auth({})).then(res => ({
    data: undefined,
    statusCode: res.status,
  }));
