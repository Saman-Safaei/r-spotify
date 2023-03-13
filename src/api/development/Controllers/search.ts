import { RestRequest, RestContext, ResponseComposition } from 'msw';
import Musics from '../FakeData/Musics';
import Playlists from '../FakeData/Playlists';
import Categories from '../FakeData/Categories';

export function search(req: RestRequest, res: ResponseComposition, ctx: RestContext) {
  let responseArray: Array<MockPlaylist | MockMusic> = [...Playlists, ...Musics];

  const queryParam = req.url.searchParams.get('q');
  const categoryParam = req.url.searchParams.get('category');
  const skipParam = req.url.searchParams.get('skip');

  if (!skipParam || !categoryParam || isNaN(+skipParam) || isNaN(+categoryParam)) return res(ctx.status(400));

  if (queryParam)
    responseArray = responseArray.filter(
      responseItem => responseItem.title.toLowerCase().search(queryParam.toLowerCase()) !== -1
    );

  
    
  responseArray = +categoryParam === -1 ? responseArray : responseArray.filter(responseItem => responseItem.category.id === +categoryParam);
  responseArray = responseArray.slice(+skipParam, +skipParam + 10);

  return res(ctx.json(responseArray));
}

export async function categories(req: RestRequest, res: ResponseComposition, ctx: RestContext) {
  return res(ctx.json(Categories));
}
