import { createContext } from 'react'

export const defaultValues = {
  isPlaying: false,
  musicUrls: [],
  currentDuration: 1,
  currentTime: 0,
}
export const defaultFunctions = {
  loadMusic: url => {},
  playMusic: () => {},
  pauseMusic: () => {},
}

const context = createContext({ ...defaultFunctions, ...defaultValues })

export const actionTypes = {
  LOAD_MUSIC: 'LOAD_MUSIC',
  PLAY_MUSIC: 'PLAY_MUSIC',
  PAUSE_MUSIC: 'PAUSE_MUSIC',
  INIT_DURATION: 'INIT_DURATION',
  UPDATE_TIME: "UPDATE_TIME"
}

export default context
