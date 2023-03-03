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
