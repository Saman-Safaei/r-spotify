import fetcher from '.';

export type TGetBySkip = {
  id: number;
  title: string;
  imageCover: string;
  duration: number;
};

export type TGetById = {
  id: number;
  title: string;
  imageCover: string;
  duration: number;
  musicFile: string;
  publishDate: string;
  like: number;
  singer: {
    id: number;
    firstname: string;
    lastname: string;
    profilephoto: string;
  };
  album: string;
};

export const getBySkip = ({ pageParam = 0 }):RQueryResponse<TGetBySkip[]> =>
  fetcher.get(`/musics/getBySkip?skip=${pageParam}`).then(res => ({
    data: res.data,
    statusCode: res.status,
  }));

export const getById = (id: number):RQueryResponse<TGetById> =>
  fetcher.post(`/musics/getById`, { id }).then(res => ({
    data: res.data,
    statusCode: res.status,
  }));
