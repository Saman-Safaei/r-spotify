import fetcher from '.'

export const signup = signupInfo => fetcher.post('/Account/signup', signupInfo)

export const signin = signinInfo => fetcher.post('/Account/signin', signinInfo).then(res => res.data)
