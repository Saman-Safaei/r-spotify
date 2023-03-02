import { useInfiniteQuery } from '@tanstack/react-query';
import { getBySkip, TGetBySkip } from '../api/music';

export default function useAllSongs() {
  const { data, fetchNextPage, isSuccess, isError, isLoading, hasNextPage } = useInfiniteQuery({
    queryKey: ['songs'],
    queryFn: getBySkip,
    staleTime: 1000 * 60,
    getNextPageParam: (lastPage, allPages) => (lastPage.length === 20 ? Math.floor(allPages.length / 20) : undefined),
  });

  const allData: TGetBySkip[] | undefined = data?.pages.flat();

  return {
    data: allData,
    fetchNext: fetchNextPage,
    isSuccess,
    isError,
    isLoading,
    hasNextPage,
  };
}
