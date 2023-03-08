import { useMutation } from '@tanstack/react-query';
import { setLike } from '../api/music';
import { AxiosError } from 'axios';

export function useMusicLike(id: number, onSuccess?: () => void) {
  const { mutate, isIdle, isLoading } = useMutation<RQueryData<undefined>, AxiosError, { id: number }>({
    mutationFn: setLike,
  });

  const successHandler = () => {
    if (onSuccess) onSuccess();
  };

  const mutateHandler = () => {
    mutate({ id }, { onSuccess: successHandler });
  };

  return { mutate: mutateHandler, isIdle, isLoading };
}
