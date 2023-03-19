import { useQuery } from '@tanstack/react-query';
import { userData } from '../api/users';
import { AxiosError } from 'axios';

export default function useUserData(
  isLogged: boolean,
  onSuccess: (username: string, email: string) => void,
  onError: () => void
) {
  const errorHandler = () => {
    onError();
    localStorage.removeItem('token');
  };

  useQuery<{ data: any; statusCode: number }, AxiosError>({
    queryFn: userData,
    refetchInterval: 20000,
    enabled: isLogged,
    onSuccess: response => onSuccess(response.data.username, response.data.email),
    onError: errorHandler,
    queryKey: ['userInfo'],
  });
}
