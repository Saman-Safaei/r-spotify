import { rest, RestHandler } from 'msw';
import url from './Utilities/name';
import { getUserInfo, SignIn, SignUp } from './Controllers/user';
import { getMusicById, getMusicsBySkip, setLike } from './Controllers/musics';
import { getPlaylistById, getPlaylistBySkip, setLike as playlistSetLike } from './Controllers/playlist';
import { categories, search } from './Controllers/search';

const handlers: RestHandler[] = [
  rest.post(url`/auth/signin`, SignIn),
  rest.post(url`/auth/signup`, SignUp),
  rest.post(url`/auth/getUserInfo`, getUserInfo),
  rest.get(url`/music/getById`, getMusicById),
  rest.get(url`/music/getBySkip`, getMusicsBySkip),
  rest.post(url`/music/like`, setLike),
  rest.get(url`/playlist/getById`, getPlaylistById),
  rest.get(url`/playlist/getBySkip`, getPlaylistBySkip),
  rest.get(url`/playlist/setLike`, playlistSetLike),
  rest.get(url`/search`, search), // need <q> in query params - ( /search?q=Metal&category=Soundtrack ),
  rest.get(url`/categories`, categories),
];

export default handlers;
