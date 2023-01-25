import { createContext } from 'react'

export const defaultValues = {
  isPlaying: false,
  musicUrl: '',
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
}

export default context
