import { useContext } from 'react'
import { useMutation } from '@tanstack/react-query'
import { signin } from '../api/users'
import userSlice from '../contexts/user/user-slice'
import uiSlice from '../contexts/ui/ui-slice'

export default function useSignin() {
  const userCtx = useContext(userSlice)
  const uiCtx = useContext(uiSlice)

  const successHandler = data => {
    userCtx.setUser(data?.username, data?.token)
    uiCtx.hideAll()
  }

  const { mutate, ...mutationData } = useMutation({
    mutationFn: signin,
  })

  const signinHandler = variables => {
    mutate(variables, { onSuccess: successHandler })
  }

  return { signin: signinHandler, ...mutationData }
}
