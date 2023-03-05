import { ResponseComposition, RestRequest, RestContext } from 'msw';
import Playlists from '../FakeData/Playlists';

export async function getPlaylistById(req: RestRequest, res: ResponseComposition, ctx: RestContext) {
  const playlistIdString = req.url.searchParams.get('id');

  if (!playlistIdString) return res(ctx.status(400));

  const playlistId = +playlistIdString;

  if (isNaN(playlistId)) return res(ctx.status(400));

  const playlist = Playlists.find(playlist => playlist.id === playlistId);

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

  if (isNaN(skipNum) || isNaN(takeNum)) return res(ctx.status(400));

  const playlists: MockLimitedPlaylist[] = Playlists.slice(skipNum, skipNum + takeNum).map(playlist => ({
    id: playlist.id,
    category: playlist.category,
    musics: playlist.musics.map(music => music.musicFile),
    description: playlist.description,
    name: playlist.name,
    imageCover: playlist.imageCover,
  }));

  const filteredPlaylists = playlists.filter(playlist => playlist.category === categoryString);

  return res(ctx.json(categoryString === 'all' ? playlists : filteredPlaylists));
}
