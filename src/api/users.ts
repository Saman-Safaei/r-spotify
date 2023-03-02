import fetcher from '.'

export const signup = (signupInfo: any) => fetcher.post('/Account/signup', signupInfo)

export const signin = (signinInfo: any) => fetcher.post('/Account/signin', signinInfo).then(res => res.data)
