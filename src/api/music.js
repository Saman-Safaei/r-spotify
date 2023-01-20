import fetcher from '.'

export const getBySkip = skipNumber => fetcher.get(`/Music/GetBySkip?Skip=${skipNumber}`).then(res => res.data)

export const getById = musicId => fetcher.get(`/Music/GetById?Id=${musicId}`).then(res => res.data)