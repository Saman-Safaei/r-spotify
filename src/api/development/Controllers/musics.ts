import { ResponseComposition, RestContext, RestRequest } from 'msw';
import Musics from '../FakeData/Musics';

export async function getMusicById(req: RestRequest, res: ResponseComposition, ctx: RestContext) {
  const requestBody = await req.json<GetMusicByIdBody>();

  if (typeof requestBody.id === 'undefined') return res(ctx.status(400));

  const music = Musics.find(music => music.id === requestBody.id);

  if (!music) return res(ctx.status(404));

  return res(ctx.status(200), ctx.json(music));
}

export async function getMusicsBySkip(req: RestRequest, res: ResponseComposition, ctx: RestContext) {
  const skipString = req.url.searchParams.get('skip');

  if (!skipString) return res(ctx.status(400));

  const skipNumber = +skipString;

  if (isNaN(skipNumber)) res(ctx.status(400));

  const musics = Musics.slice(skipNumber * 10, skipNumber * 10 + 10);

  return res(ctx.json(musics), ctx.status(200));
}
