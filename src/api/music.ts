import fetcher from '.';

export type TGetBySkip = {
  id: number;
  title: string;
  imageCover: string;
  duration: number;
};

export const getBySkip = ({ pageParam = 0 }): RQueryResponse<TGetBySkip[]> =>
  fetcher.get(`/musics/getBySkip?skip=${pageParam}`).then(res => ({
    data: res.data,
    statusCode: res.status,
  }));

export const getById = (id: number): RQueryResponse<MockMusic> =>
  fetcher
    .post(
      `/musics/getById`,
      { id },
      {
        headers: {
          Bearer: localStorage.getItem('token'),
        },
      }
    )
    .then(res => ({
      data: res.data,
      statusCode: res.status,
    }));

export const setLike = ({ id }: { id: number }): RQueryResponse<undefined> =>
  fetcher
    .post(
      '/musics/setLike',
      { likeId: id },
      {
        headers: {
          Bearer: localStorage.getItem('token'),
        },
      }
    )
    .then(res => ({
      data: undefined,
      statusCode: res.status,
    }));
