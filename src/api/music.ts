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
  album?: string;
};

export const getBySkip = ({ pageParam = 0 }) =>
  fetcher.get<TGetBySkip[]>(`/Music/GetBySkip?Skip=${pageParam}`).then(res => res.data);

export const getById = (id: number) => fetcher.get<TGetById>(`/Music/GetById?Id=${id}`).then(res => res.data);
