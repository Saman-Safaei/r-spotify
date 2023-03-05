import { useQuery } from '@tanstack/react-query';
import { getBySkip } from '../api/playlist';

export function usePlaylists(skip: number, count: number, category: string) {
  const { data, isSuccess } = useQuery({
    queryFn: () => getBySkip(skip, count, category),
    queryKey: ['playlists', category, skip, count],
  });

  return { data: data?.data, isSuccess };
}
