import { useQuery } from '@tanstack/react-query'
import { getBySkip } from '../api/playlist'

export default function usePlaylist(skip, count, category) {
  const { data, isSuccess } = useQuery({ queryFn: () => getBySkip(skip, count, category), queryKey: ['noneKey'] })

  return {data, isSuccess}
}
