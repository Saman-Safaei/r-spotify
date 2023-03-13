import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { categories, search } from '../api/search';
import { AxiosError } from 'axios';
import { useEffect, useState, useRef, useCallback } from 'react';

export function useSearch() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [query, setQuery] = useState<string | undefined>();
  const [category, setCategory] = useState<number>(-1);

  const { data, refetch, fetchNextPage, hasNextPage } = useInfiniteQuery<
    RQueryData<(MockPlaylist | MockMusic)[]>,
    AxiosError
  >({
    queryFn: ({ pageParam = 0 }) => search({ query, category, pageParam }),
    getNextPageParam(lastPage, allPages) {
      if (lastPage.data.length < 10) return undefined;
      return allPages.length * 10;
    },
    queryKey: [],
  });

  const flatData = data?.pages.map(res => res.data).flat();

  const queryChangeHandler = useCallback(() => {
    let timeout: Optional<ReturnType<typeof setTimeout>> = undefined;

    return () => {
      if (timeout) {
        clearTimeout(timeout);
        timeout = undefined;
      }
      if (!timeout)
        timeout = setTimeout(() => {
          if (inputRef.current) setQuery(inputRef.current.value);
          timeout = undefined;
        }, 500);
    };
  }, []);

  useEffect(() => {
    refetch().then();
  }, [category, query, refetch]);
  
  const setCategoryHandler = (id: number) => {
    console.log(id)
    setCategory(id);
    refetch();
  }

  return {
    data: flatData,
    nextPage: fetchNextPage,
    onQueryChange: queryChangeHandler(),
    inputRef,
    setCategory: setCategoryHandler,
    hasNextPage,
  };
}

export function useCategories() {
  const { data, isError } = useQuery<RQueryData<MockLimitedCategory[]>, AxiosError>({
    queryFn: categories,
    queryKey: ['categories'],
  });

  return { response: data, isError };
}
