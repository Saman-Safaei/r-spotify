import { useMutation } from '@tanstack/react-query';
import { signin } from '../api/users';
import { useAppDispatch } from '../store';
import { hideAll } from '../store/uiSlice';
import { setLogged } from '../store/userSlice';

export default function useSignin() {
  const dispatch = useAppDispatch();

  const successHandler = (variables: { data: any; statusCode: number }) => {
    dispatch(setLogged(true));
    localStorage.setItem('token', variables.data.token);
    dispatch(hideAll());
  };

  const { mutate, error, ...mutationData } = useMutation({
    mutationFn: signin,
  });

  const signinHandler = (variables: { username: string; password: string }) => {
    mutate(variables, { onSuccess: successHandler });
  };

  return { signin: signinHandler, error: error as { message: string } | null, ...mutationData };
}
