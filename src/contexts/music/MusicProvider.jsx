import React, { useReducer, useRef } from 'react'
import musicSlice, { actionTypes, defaultValues } from './music-slice'

function musicReducer(state, action) {
  if (action.type === actionTypes.LOAD_MUSIC) {
    return { ...state, musicUrl: action.payload.url, isPlaying: true }
  } else if (action.type === actionTypes.PLAY_MUSIC) {
    return { ...state, isPlaying: true }
  } else if (action.type === actionTypes.PAUSE_MUSIC) {
    return { ...state, isPlaying: false }
  } else return state
}

export default function MusicProvider({ children }) {
  const musicApi = useRef(new Audio())
  const [musicState, dispatchMusic] = useReducer(musicReducer, defaultValues, undefined)

  const loadMusicHandler = url => {
    dispatchMusic({ type: actionTypes.LOAD_MUSIC, payload: { url } })
    musicApi.current.src = url
    musicApi.current.play().then()
  }
  const playMusicHandler = () => {
    if (!musicApi.current.src.trim()) return

    dispatchMusic({ type: actionTypes.PLAY_MUSIC })
    musicApi.current.play().then()
  }
  const pauseMusicHandler = () => {
    dispatchMusic({ type: actionTypes.PAUSE_MUSIC })
    musicApi.current.pause()
  }

  const providerValue = {
    musicUrl: musicState.musicUrl,
    isPlaying: musicState.isPlaying,
    loadMusic: loadMusicHandler,
    playMusic: playMusicHandler,
    pauseMusic: pauseMusicHandler,
  }

  return <musicSlice.Provider value={providerValue}>{children}</musicSlice.Provider>
}
