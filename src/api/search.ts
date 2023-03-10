import fetcher from '.';

export const search = ({
  query,
  category,
  pageParam
}: SearchParams): RQueryResponse<(MockPlaylist | MockMusic)[]> => {
  const url = new URLSearchParams()
  if (query) url.set('q', query);
  if (category) url.set('category', category);
  
  url.set('page', pageParam.toString());

  return fetcher.get(`/search?${url.toString()}`).then(res => ({
    data: res.data,
    statusCode: res.status,
  }));
};
