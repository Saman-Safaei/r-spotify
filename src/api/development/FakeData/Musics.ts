const musics = (
  albums: MockLimitedAlbum[],
  categories: MockLimitedCategory[],
  singers: MockLimitedSinger[]
): MockMusic[] => [
  {
    id: 0,
    musicFile: 'musics/lord_of_cinder.mp3',
    like: false,
    duration: 324,
    title: 'Gwyn - The Lord of Cinder',
    imageCover: 'images/DarkSoulsCover.jpg',
    publishDate: '1401/04/05',
    album: albums.find(album => album.id === 0)!,
    category: categories.find(category => category.id === 0)!,
    singer: singers.find(singer => singer.id === 0)!,
  },
  {
    id: 1,
    musicFile: 'musics/knight_artorias.mp3',
    like: false,
    duration: 304,
    title: 'Knight Artorias',
    imageCover: 'images/DarkSoulsCover.jpg',
    publishDate: '1401/04/05',
    album: albums.find(album => album.id === 0)!,
    category: categories.find(category => category.id === 0)!,
    singer: singers.find(singer => singer.id === 0)!,
  },
  {
    id: 2,
    musicFile: 'musics/ornstein_and_smough.mp3',
    like: true,
    duration: 324,
    title: 'Ornstein & Smough',
    imageCover: 'images/DarkSoulsCover.jpg',
    publishDate: '1401/04/05',
    album: albums.find(album => album.id === 0)!,
    category: categories.find(category => category.id === 0)!,
    singer: singers.find(singer => singer.id === 0)!,
  },
];

export default musics;
