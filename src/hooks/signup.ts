import { useMutation } from '@tanstack/react-query';
import { signup } from '../api/users';
import { useContext } from 'react';
import userSlice from '../contexts/user/user-slice';
import uiSlice from '../contexts/ui/ui-slice';
import { AxiosError } from 'axios';

export default function useSignup() {
  const userCtx = useContext(userSlice);
  const uiCtx = useContext(uiSlice);

  const successHandler = (variables: { data: { token: string } }) => {
    userCtx.setLogged(true, variables.data.token);
    uiCtx.hideAll();
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
