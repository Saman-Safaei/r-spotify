import { rest, RestHandler } from 'msw';
import url from './Utilities/name';
import { getUserInfo, SignIn, SignUp } from './Controllers/user';
import {getMusicById, getMusicsBySkip} from './Controllers/musics';

const handlers: RestHandler[] = [
  rest.post(url`/auth/signin`, SignIn),
  rest.post(url`/auth/signup`, SignUp),
  rest.post(url`/auth/getUserInfo`, getUserInfo),
  rest.post(url`/musics/getById`, getMusicById),
  rest.get(url`/musics/getBySkip`, getMusicsBySkip)
];

export default handlers;
