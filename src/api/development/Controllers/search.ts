import { RestRequest, RestContext, ResponseComposition } from 'msw';
import Musics from '../FakeData/Musics';
import Playlists from '../FakeData/Playlists';

export function search(req: RestRequest, res: ResponseComposition, ctx: RestContext) {
  let responseArray: Array<MockPlaylist | MockMusic> = [...Playlists, ...Musics];

  const queryParam = req.url.searchParams.get('q');
  const categoryParam = req.url.searchParams.get('category');

  if (queryParam)
    responseArray = responseArray.filter(
      responseItem => responseItem.title.toLowerCase().search(queryParam.toLowerCase()) !== -1
    );

  if (categoryParam)
    responseArray = responseArray.filter(
      responseItem => responseItem.category.toLowerCase().search(categoryParam.toLowerCase()) !== -1
    );

  return res(ctx.json(responseArray));
}
