import fetcher from '.'

export const getBySkip = ({ pageParam = 0 }) =>
  fetcher.get(`/Music/GetBySkip?Skip=${pageParam}`).then(res => res.data)

export const getById = ({ pageParam = 0 }) =>
  fetcher.get(`/Music/GetById?Id=${pageParam}`).then(res => res.data)
