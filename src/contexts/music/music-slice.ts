import { createContext } from 'react';

export type TDefaultState = {
  isPlaying: boolean;
  musicUrls: string[];
  currentDuration: number;
  currentTime: number;
};

export type TDefaultFunctions = {
  loadMusic(url: string): void;
  loadPlaylist(urls: string[]): void;
  playMusic(): void;
  pauseMusic(): void;
  forwardMusic(): void;
  backwardMusic(): void;
  setTimePercent(percent: number): void;
};

export const defaultState: TDefaultState = {
  isPlaying: false,
  musicUrls: [],
  currentDuration: 1,
  currentTime: 0,
};

export const defaultFunctions: TDefaultFunctions = {
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
