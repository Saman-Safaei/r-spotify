import { useMutation } from '@tanstack/react-query';
import { signup } from '../api/users';
import { useAppDispatch } from '../store';
import { hideAll } from '../store/uiSlice';
import { setLogged } from '../store/userSlice';

export default function useSignup() {
  const dispatch = useAppDispatch();

  const successHandler = (variables: { data: { token: string } }) => {
    dispatch(setLogged(true));
    localStorage.setItem('token', variables.data.token);
    dispatch(hideAll());
  };

  const { mutate, ...mutationData } = useMutation<{ data: any; statusCode: number }, any, any>({
    mutationFn: signup,
  });

  const signupHandler = (variables: { username: string; email: string; password: string; confirmPassword: string }) => {
    mutate(variables, {
      onSuccess: successHandler,
    });
  };

  const errorMessage =
    mutationData?.error?.response?.status === 409
      ? 'The Username or email are already exists.'
      : mutationData?.error?.message;

  return {
    signup: signupHandler,
    ...mutationData,
    error: mutationData.error,
    isError: mutationData.isError,
    isLoading: mutationData.isLoading,
    errorMessage,
  };
}
