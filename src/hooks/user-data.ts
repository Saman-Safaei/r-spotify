import { useQuery } from '@tanstack/react-query';
import { userData } from '../api/users';
import { AxiosError } from 'axios';

export default function useUserData(
  isLogged: boolean,
  setUser: (username: string, email: string) => void,
  logoutUser: () => void
) {
  const { error, isError } = useQuery<{ data: any; statusCode: number }, AxiosError>({
    queryFn: userData,
    refetchInterval: 20000,
    enabled: isLogged,
    onSuccess: response => setUser(response.data.username, response.data.email),
    onError: () => logoutUser(),
    queryKey: ['userInfo']
  });

  return { error, isError };
}
