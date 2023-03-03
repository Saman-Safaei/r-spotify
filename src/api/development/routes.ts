import { rest, RestHandler } from 'msw';
import url from './Utilities/name';
import { getUserInfo, SignIn, SignUp } from './Controllers/user';

const handlers: RestHandler[] = [
  rest.post(url`/auth/signin`, SignIn),
  rest.post(url`/auth/signup`, SignUp),
  rest.post(url`/auth/getUserInfo`, getUserInfo),
];

export default handlers;
