import { useState, useContext } from 'react'
import uiSlice from '../contexts/ui/ui-slice'
import { fetcher } from '../api'
import userSlice from '../contexts/user/user-slice'

export default function useSignin() {
  const [err, setErr] = useState()
  const [pending, setPending] = useState(false)

  const uiContext = useContext(uiSlice)
  const userContext = useContext(userSlice)

  const signin = async ({ username, password }) => {
    setPending(true)
    setErr(null)

    try {
      const response = await fetcher('/Account/signin', {
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        method: 'POST',
        body: JSON.stringify({
          username,
          password,
        }),
      })

      if (response.ok) {
        const responseData = await response.json()
        userContext.setUser(responseData.username, responseData.token)
        setPending(false)
        uiContext.hideAll()
      } else {
        const status = response.status
        const message =
          status === 400
            ? 'The email or password is invalid.'
            : 'An unknown error occured'

        setErr({ status: response.status, message: message })
        setPending(false)
      }
    } catch (catched) {
      setErr({ status: 400, message: 'An Unknown Error Occurred. Check internet connection.' })
      setPending(false)
    }
  }

  return { pending, signin, err }
}
