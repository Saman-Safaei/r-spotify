import { createContext } from 'react';

export const defaultState: CtxMusicState = {
  isPlaying: false,
  musicUrls: [],
  currentDuration: 1,
  currentTime: 0,
};

export const defaultFunctions: CtxMusicFunctions = {
  loadMusic: (url: string) => {},
  loadPlaylist: (urls: string[]) => {},
  playMusic: () => {},
  pauseMusic: () => {},
  forwardMusic: () => {},
  backwardMusic: () => {},
  setTimePercent: (percent: number) => {},
};

const context = createContext({ ...defaultFunctions, ...defaultState });

export enum actionTypes {
  LOAD_MUSIC,
  LOAD_PLAYLIST,
  PLAY_MUSIC,
  PAUSE_MUSIC,
  INIT_DURATION,
  UPDATE_TIME,
}

export default context;
