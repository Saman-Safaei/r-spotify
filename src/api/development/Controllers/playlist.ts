import { ResponseComposition, RestRequest, RestContext } from 'msw';
import Database from '../FakeData/Database';

export async function getPlaylistById(req: RestRequest, res: ResponseComposition, ctx: RestContext) {
  const playlistIdString = req.url.searchParams.get('id');

  if (!playlistIdString) return res(ctx.status(400));

  const playlistId = +playlistIdString;

  if (isNaN(playlistId)) return res(ctx.status(400));

  const playlist = Database.playlists.find(playlist => playlist.id === playlistId);

  if (!playlist) return res(ctx.status(404));

  return res(ctx.json(playlist));
}

export async function getPlaylistBySkip(req: RestRequest, res: ResponseComposition, ctx: RestContext) {
  const skipString = req.url.searchParams.get('skip');
  const takeString = req.url.searchParams.get('take');
  const categoryString = req.url.searchParams.get('category');

  if (!skipString || !takeString || !categoryString) return res(ctx.status(400));

  const skipNum = +skipString;
  const takeNum = +takeString;
  const categoryNum = +categoryString;

  if (isNaN(skipNum) || isNaN(takeNum) || isNaN(categoryNum)) return res(ctx.status(400));

  let playlists: MockLimitedPlaylist[] = [];

  if (categoryNum >= 0) {
    playlists = Database.playlists
      .filter(playlist => playlist.category.id === categoryNum)
      .slice(skipNum, skipNum + takeNum)
      .map(playlist => ({
        id: playlist.id,
        category: playlist.category,
        musics: playlist.musics.map(music => music.musicFile),
        description: playlist.description,
        name: playlist.title,
        imageCover: playlist.imageCover,
      }));
  } else {
    playlists = Database.playlists.slice(skipNum, skipNum + takeNum).map(playlist => ({
      id: playlist.id,
      category: playlist.category,
      musics: playlist.musics.map(music => music.musicFile),
      description: playlist.description,
      name: playlist.title,
      imageCover: playlist.imageCover,
    }));
  }

  return res(ctx.json(playlists));
}

export async function setLike(req: RestRequest, res: ResponseComposition, ctx: RestContext) {
  const likeId = req.url.searchParams.get('id');

  if (!likeId || isNaN(+likeId)) return res(ctx.status(400));

  const playlistItem = Database.playlists.find(playlist => playlist.id === +likeId);

  if (!playlistItem) return res(ctx.status(404));

  playlistItem.like = !playlistItem.like;

  return res(ctx.status(200));
}
