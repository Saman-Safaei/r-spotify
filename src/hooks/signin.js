import { useContext } from 'react'
import { useMutation } from '@tanstack/react-query'
import { signin } from '../api/users'
import userSlice from '../contexts/user/user-slice'
import uiSlice from '../contexts/ui/ui-slice'

export default function useSignin() {
  const userCtx = useContext(userSlice)
  const uiCtx = useContext(uiSlice)

  const onSuccess = data => {
    userCtx.setUser(data?.username, data?.token)
    uiCtx.hideAll()
  }

  const { mutate, ...mutationData } = useMutation({
    mutationFn: signin,
    onSuccess: onSuccess,
  })

  return { signin: mutate, ...mutationData }
}
