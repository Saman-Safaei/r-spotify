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
  singer: {
    id: number;
    firstname: string;
    lastname: string;
    profilephoto: string;
  };
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
  musics: number[];
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

interface GetMusicByIdBody {
  id: number;
}

interface CtxMusicFunctions {
  loadMusic(url: string): void;

  loadPlaylist(urls: string[]): void;

  playMusic(): void;

  pauseMusic(): void;

  forwardMusic(): void;

  backwardMusic(): void;

  setTimePercent(percent: number): void;
}

interface CtxMusicState {
  isPlaying: boolean;
  musicUrls: string[];
  currentDuration: number;
  currentTime: number;
}

interface CtxUIFunctions {
  showSignup(): void;

  showSignin(): void;

  hideAll(): void;

  hideSignup(): void;

  hideSignin(): void;
}

interface CtxUIState {
  isSignupShow: boolean;
  isSigninShow: boolean;
}

interface Action<T = number, U = any> {
  type: T;
  payload?: U;
}

interface CtxUserFunctions {
  setUser(username: string, email: string): void;

  logoutUser(): void;

  setLogged(isLogged: boolean, token: string): void;
}

interface CtxUserState {
  username: string;
  email: string;
  logged: boolean;
}

interface MockPlaylist {
  id: number;
  name: string;
  description: string;
  imageCover: string;
  category: string;
  musics: MockMusic[];
}
