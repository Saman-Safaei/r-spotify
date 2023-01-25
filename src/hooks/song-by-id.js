import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getById } from '../api/music'

export default function useSongById(id) {
  const { data, isLoading, isError, isSuccess, error } = useQuery({
    queryKey: ['song', id],
    queryFn: async () => await getById(id),
  })

  useEffect(() => {
    if (isError)
      throw new Response(null, { statusText: 'not found song', status: 404 })
  }, [isError])

  return { data, isLoading, isError, isSuccess, error }
}
