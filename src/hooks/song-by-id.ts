import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import {getById, TGetById} from '../api/music'
import {AxiosError} from 'axios'

export default function useSongById(id:number) {
  const { data, isLoading, isError, isSuccess, error } = useQuery<TGetById, AxiosError, TGetById, any[]>({
    queryKey: ['song', id],
    queryFn: async () => await getById(id),
  })

  useEffect(() => {
    if (isError && error.response?.status === 404)
      throw new Response(null, { statusText: 'not found song', status: 404 })
  }, [error, isError])

  return { data, isLoading, isError, isSuccess, error }
}
