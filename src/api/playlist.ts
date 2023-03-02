import fetcher from '.';

type TGetBySkip = {
  title: string;
  label: string;
  id: number;
  longID: number;
};

type TGetById = {
  id: number;

};

export const getBySkip = (skip: number, count: number, category: string) =>
  fetcher.get<TGetBySkip[]>(`/Playlist/GetBySkip?Skip=${skip}&Take=${count}&Category=${category}`).then(res => res.data);

export const getById = (id: number) => fetcher.get<TGetById>(`/Playlist/GetById?id=${id}`).then(res => res.data);
