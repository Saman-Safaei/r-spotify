import fetcher, { auth } from '.';

export type TGetBySkip = {
  id: number;
  title: string;
  imageCover: string;
  duration: number;
};

export const getBySkip = ({ pageParam = 0 }): RQueryResponse<TGetBySkip[]> =>
  fetcher.get(`/music/getBySkip?skip=${pageParam}`).then(res => ({
    data: res.data,
    statusCode: res.status,
  }));

export const getById = (id: number): RQueryResponse<MockMusic> =>
  fetcher.get(`/music/getById?id=${id}`, auth({})).then(res => ({
    data: res.data,
    statusCode: res.status,
  }));

export const setLike = ({ id }: { id: number }): RQueryResponse<undefined> =>
  fetcher.post('/music/like', { likeId: id }, auth({})).then(res => ({
    data: undefined,
    statusCode: res.status,
  }));
