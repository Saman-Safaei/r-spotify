import Playlists from '../FakeData/Playlists';
import Musics from '../FakeData/Musics';
import Categories from '../FakeData/Categories';
import Albums from '../FakeData/Albums';
import Singers from '../FakeData/Singers';
import Users from "./Users";

const mockSingers = Singers();
const mockAlbums = Albums();
const mockCategories = Categories();
const mockMusics = Musics(mockAlbums, mockCategories, mockSingers);
const mockPlaylists = Playlists(mockMusics, mockCategories);
const mockUsers = Users()

const database = {
  singers: mockSingers,
  albums: mockAlbums,
  categories: mockCategories,
  musics: mockMusics,
  playlists: mockPlaylists,
  users: mockUsers
};

export default database;