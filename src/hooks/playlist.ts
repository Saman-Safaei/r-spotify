import { useQuery } from '@tanstack/react-query';
import { getById, getBySkip } from '../api/playlist';
import { AxiosError } from 'axios';

export function usePlaylists(skip: number, count: number, category: string) {
  const { data, isSuccess } = useQuery({
    queryFn: () => getBySkip(skip, count, category),
    queryKey: ['playlists', category, skip, count],
  });

  return { data: data?.data, isSuccess };
}

export function usePlaylist(id: string) {
  if (!id || isNaN(+id))
    throw new Response(null, {
      status: 400,
      statusText: 'Invalid Route',
    });

  const { data: response, isSuccess, error } = useQuery<RQueryData<MockPlaylist>, AxiosError>({
    queryFn: () => getById(+id),
    queryKey: ['playlist', +id],
    retry: false
  });

  if (error?.response?.status === 404) {
    throw new Response(null, {status: 404, statusText: "Playlist Not Found"})
  }

  return { response, isSuccess };
}
