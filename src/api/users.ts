import fetcher from '.';

export const signup = (signupInfo: any):RQueryResponse =>
  fetcher.post('/auth/signup', signupInfo).then(res => ({
    data: res.data,
    statusCode: res.status,
  }));

export const signin = (signinInfo: any):RQueryResponse =>
  fetcher.post('/auth/signin', signinInfo).then(res => ({
    data: res.data,
    statusCode: res.status,
  }));

export const userData = (token: Nullable<string>):RQueryResponse =>
  fetcher.post('/auth/getUserInfo', { token }).then(res => ({
    data: res.data,
    statusCode: res.status,
  }));
