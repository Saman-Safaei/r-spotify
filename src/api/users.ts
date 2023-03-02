import fetcher from '.'

export const signup = (signupInfo: any) => fetcher.post('/auth/signup', signupInfo)

export const signin = (signinInfo: any) => fetcher.post('/auth/signin', signinInfo).then(res => res.data)
