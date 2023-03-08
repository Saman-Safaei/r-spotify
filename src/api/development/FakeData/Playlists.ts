const playlists: MockPlaylist[] = [
  {
    id: 0,
    imageCover: 'images/DarkSoulsCover.jpg',
    description: 'The soundtracks in Dark Souls - Artorias of Abyss edition.',
    name: 'Dark Souls - Artorias of Abyss Edition',
    category: 'game',
    like: false,
    musics: [
      {
        id: 0,
        musicFile: 'musics/lord_of_cinder.mp3',
        like: false,
        duration: 324,
        title: 'Gwyn - The Lord of Cinder',
        imageCover: 'images/DarkSoulsCover.jpg',
        publishDate: '1401/04/05',
        album: 'Dark Souls 1',
        singer: {
          id: 0,
          profilephoto: 'images/DarkSoulsCover.jpg',
          firstname: 'John',
          lastname: 'Doe',
        },
      },
      {
        id: 1,
        musicFile: 'musics/knight_artorias.mp3',
        like: false,
        duration: 304,
        title: 'Knight Artorias',
        imageCover: 'images/DarkSoulsCover.jpg',
        publishDate: '1401/04/05',
        album: 'Dark Souls 1',
        singer: {
          id: 0,
          firstname: 'John',
          lastname: 'Doe',
          profilephoto: 'images/DarkSoulsCover.jpg',
        },
      },
      {
        id: 2,
        musicFile: 'musics/ornstein_and_smough.mp3',
        like: true,
        duration: 324,
        title: 'Ornstein & Smough',
        imageCover: 'images/DarkSoulsCover.jpg',
        publishDate: '1401/04/05',
        album: 'Dark Souls 1',
        singer: {
          id: 0,
          profilephoto: 'images/DarkSoulsCover.jpg',
          firstname: 'John',
          lastname: 'Doe',
        },
      },
    ],
  },
];

export default playlists;
