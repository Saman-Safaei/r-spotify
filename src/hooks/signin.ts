import { useContext } from 'react';
import { useMutation } from '@tanstack/react-query';
import { signin } from '../api/users';
import userSlice from '../contexts/user/user-slice';
import uiSlice from '../contexts/ui/ui-slice';

export default function useSignin() {
  const userCtx = useContext(userSlice);
  const uiCtx = useContext(uiSlice);

  const successHandler = (data: { username: string; token: string }) => {
    userCtx.setUser(data.username, data.token);
    uiCtx.hideAll();
  };

  const { mutate, error, ...mutationData } = useMutation({
    mutationFn: signin,
  });

  const signinHandler = (variables: { username: string; password: string }) => {
    mutate(variables, { onSuccess: successHandler });
  };

  return { signin: signinHandler, error: error as { message: string } | null, ...mutationData };
}
