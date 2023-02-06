import fetcher from '.'

export const getBySkip = (skip, count, category) =>
  fetcher.get(`/Playlist/GetBySkip?Skip=${skip}&Take=${count}&Category=${category}`).then(res => res.data)
