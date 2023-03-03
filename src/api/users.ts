import fetcher from '.';

export const signup = (signupInfo: any) =>
  fetcher.post('/auth/signup', signupInfo).then(res => ({
    data: res.data,
    statusCode: res.status,
  }));

export const signin = (signinInfo: any) =>
  fetcher.post('/auth/signin', signinInfo).then(res => ({
    data: res.data,
    statusCode: res.status,
  }));

export const userData = (token: Nullable<string>) =>
  fetcher.post('/auth/getUserInfo', { token }).then(res => ({
    data: res.data,
    statusCode: res.status,
  }));
