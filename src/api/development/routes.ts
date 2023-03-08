import { rest, RestHandler } from 'msw';
import url from './Utilities/name';
import { getUserInfo, SignIn, SignUp } from './Controllers/user';
import {getMusicById, getMusicsBySkip, setLike} from './Controllers/musics';
import { getPlaylistById, getPlaylistBySkip } from './Controllers/playlist';

const handlers: RestHandler[] = [
  rest.post(url`/auth/signin`, SignIn),
  rest.post(url`/auth/signup`, SignUp),
  rest.post(url`/auth/getUserInfo`, getUserInfo),
  rest.post(url`/musics/getById`, getMusicById),
  rest.get(url`/musics/getBySkip`, getMusicsBySkip),
  rest.get(url`/playlists/getById`, getPlaylistById),
  rest.get(url`/playlists/getBySkip`, getPlaylistBySkip),
  rest.post(url`/musics/setLike`, setLike),
];

export default handlers;
