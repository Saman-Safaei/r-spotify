/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-ignore

interface MockMusic {
  id: number;
  title: string;
  imageCover: string;
  duration: number;
  musicFile: string;
  publishDate: string;
  like: number;
  singer: MockSinger[];
  album?: string;
}

interface SignInBody {
  username: string;
  password: string;
}

interface SignUpBody {
  username: string;
  email: string;
  password: string;
}

interface MockSinger {
  id: number;
  firstname: string;
  lastname: string;
  musics: MockMusic[];
}

interface MockUser {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  password: string;
  playlists: string[];
}

interface GetUserInfoBody {
  token: string;
}
