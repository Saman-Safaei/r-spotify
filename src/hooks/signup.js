import { useMutation } from '@tanstack/react-query'
import { signup } from '../api/users'
import useSignin from './signin'

export default function useSignup() {
  const { error, signin, isError, isLoading } = useSignin()

  const successHandler = variables => {
    signin(variables)
  }

  const { mutate, ...mutationData } = useMutation({
    mutationFn: signup,
  })

  const signupHandler = variables => {
    mutate(variables, {
      onSuccess: () => successHandler(variables),
    })
  }

  const errorMessage =
    mutationData?.error?.response?.status === 409
      ? 'The Username or email are already exists.'
      : mutationData?.error?.message

      console.log(mutationData?.error?.status);

  return {
    signup: signupHandler,
    ...mutationData,
    error: mutationData.error || error,
    isError: mutationData.isError || isError,
    isLoading: mutationData.isLoading || isLoading,
    errorMessage
  }
}
