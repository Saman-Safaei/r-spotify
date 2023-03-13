const playlists = (musics: MockMusic[], categories: MockLimitedCategory[]): MockPlaylist[] => [
  {
    id: 0,
    imageCover: 'images/DarkSoulsCover.jpg',
    description: 'The soundtracks in Dark Souls - Artorias of Abyss edition.',
    title: 'Dark Souls - Artorias of Abyss Edition',
    category: categories.find(category => category.id === 1)!,
    like: false,
    musics: [
      musics.find(music => music.id === 0)!,
      musics.find(music => music.id === 1)!,
      musics.find(music => music.id === 2)!,
    ],
  },
];

export default playlists;
