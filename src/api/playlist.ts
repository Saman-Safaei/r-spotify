import fetcher from '.';

export const getBySkip = (skip: number, count: number, category: string): RQueryResponse<MockLimitedPlaylist[]> =>
  fetcher.get(`/playlists/getBySkip?skip=${skip}&take=${count}&category=${category}`).then(res => ({
    data: res.data,
    statusCode: res.status,
  }));

export const getById = (id: number): RQueryResponse<MockPlaylist> =>
  fetcher.get(`/playlists/getById?id=${id}`).then(res => ({
    data: res.data,
    statusCode: res.status,
  }));
