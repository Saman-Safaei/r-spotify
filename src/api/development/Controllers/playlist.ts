import { ResponseComposition, RestRequest, RestContext } from 'msw';
import Playlists from '../FakeData/Playlists';
import Musics from '../FakeData/Musics';
import Categories from '../FakeData/Categories';
import Albums from '../FakeData/Albums';
import Singers from '../FakeData/Singers';

const mockSingers = Singers();
const mockAlbums = Albums();
const mockCategories = Categories();
const mockMusics = Musics(mockAlbums, mockCategories, mockSingers);
const mockPlaylists = Playlists(mockMusics, mockCategories);

export async function getPlaylistById(req: RestRequest, res: ResponseComposition, ctx: RestContext) {
  const playlistIdString = req.url.searchParams.get('id');

  if (!playlistIdString) return res(ctx.status(400));

  const playlistId = +playlistIdString;

  if (isNaN(playlistId)) return res(ctx.status(400));

  const playlist = mockPlaylists.find(playlist => playlist.id === playlistId);

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
    playlists = mockPlaylists.filter(playlist => playlist.category.id === categoryNum)
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
    playlists = mockPlaylists.slice(skipNum, skipNum + takeNum).map(playlist => ({
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
