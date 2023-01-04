import { useState } from 'react'
import { fetcher } from '../api'

export default function useSignup() {
  const [err, setErr] = useState()
  const [result, setResult] = useState()
  const [pending, setPending] = useState(false)

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

      if (response.ok) {
        setResult(response.status)
        setPending(false)
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

  return { result, pending, signup, err }
}
