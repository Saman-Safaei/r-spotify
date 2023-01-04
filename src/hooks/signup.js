import { useState, useContext } from 'react'
import uiSlice from '../contexts/ui/ui-slice'
import { fetcher } from '../api'

export default function useSignup(
  onSignup = async ({ username, passowrd }) => {}
) {
  const [err, setErr] = useState()
  const [pending, setPending] = useState(false)

  const uiContext = useContext(uiSlice)

  const signup = async ({ username, password, email }) => {
    setPending(true)
    setErr(null)

    try {
      const response = await fetcher('/Account/signup', {
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        method: 'POST',
        body: JSON.stringify({
          username,
          password,
          email,
        }),
      })
      console.log(response)
      if (response.ok) {
        await onSignup({ username, password })
        setPending(false)
        uiContext.hideAll()
      } else {
        const status = response.status
        const message =
          status === 409
            ? 'This email or username is already exists.'
            : status === 400
            ? 'The email or password is invalid.'
            : 'An unknown error occured'

        setErr({ status: response.status, message: message })
        setPending(false)
      }
    } catch (catched) {
      setErr({ status: 400, message: 'An Unknown Error Occurred.' })
      setPending(false)
    }
  }

  return { pending, signup, err }
}
