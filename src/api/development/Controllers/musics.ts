import { ResponseComposition, RestContext, RestRequest } from 'msw';

import Musics from '../FakeData/Musics';
import Categories from '../FakeData/Categories';
import Albums from '../FakeData/Albums';
import Singers from '../FakeData/Singers';

const mockSingers = Singers();
const mockAlbums = Albums();
const mockCategories = Categories();
const mockMusics = Musics(mockAlbums, mockCategories, mockSingers);

export async function getMusicById(req: RestRequest, res: ResponseComposition, ctx: RestContext) {
  const musicIdString = req.url.searchParams.get('id');

  if (!musicIdString || isNaN(+musicIdString)) return res(ctx.status(400));

  const music = mockMusics.find(music => music.id === +musicIdString);

  if (!music) return res(ctx.status(404));

  return res(ctx.status(200), ctx.json(music));
}

export async function getMusicsBySkip(req: RestRequest, res: ResponseComposition, ctx: RestContext) {
  const skipString = req.url.searchParams.get('skip');

  if (!skipString) return res(ctx.status(400));

  const skipNumber = +skipString;

  if (isNaN(skipNumber)) res(ctx.status(400));

  const musics = mockMusics.slice(skipNumber * 10, skipNumber * 10 + 10);

  return res(ctx.json(musics), ctx.status(200));
}

export async function setLike(req: RestRequest, res: ResponseComposition, ctx: RestContext) {
  const { likeId } = await req.json();

  if (typeof likeId === 'undefined' || isNaN(+likeId)) return res(ctx.status(400));

  const music = mockMusics.find(music => music.id === +likeId);

  if (!music) return res(ctx.status(404));

  music.like = !music.like;

  return res(ctx.status(200));
}
