import fetcher from '.';

export const search = ({ query, category, pageParam }: SearchParams): RQueryResponse<(MockPlaylist | MockMusic)[]> => {
  const url = new URLSearchParams();
  if (query) url.set('q', query);
  
  url.set('category', `${category}`);
  url.set('skip', pageParam.toString());
  
  console.log(url.toString())

  return fetcher.get(`/search?${url.toString()}`).then(res => ({
    data: res.data,
    statusCode: res.status,
  }));
};

export const categories = (): RQueryResponse<MockLimitedCategory[]> =>
  fetcher.get('/categories').then(res => ({
    data: res.data,
    statusCode: res.status,
  }));
