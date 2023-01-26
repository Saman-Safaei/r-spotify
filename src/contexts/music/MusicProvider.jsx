import React, { useReducer, useRef } from 'react'
import musicSlice, { actionTypes, defaultValues } from './music-slice'

function musicReducer(state, action) {
  if (action.type === actionTypes.LOAD_MUSIC) {
    return { ...state, musicUrls: [action.payload.url], isPlaying: true }
  } else if (action.type === actionTypes.PLAY_MUSIC) {
    return { ...state, isPlaying: true }
  } else if (action.type === actionTypes.PAUSE_MUSIC) {
    return { ...state, isPlaying: false }
  } else if (action.type === actionTypes.INIT_DURATION) {
    return { ...state, currentDuration: action.payload.duration }
  } else if (action.type === actionTypes.UPDATE_TIME) {
    return { ...state, currentTime: action.payload.time }
  } else return state
}

export default function MusicProvider({ children }) {
  const musicApi = useRef(new Audio())
  const [musicState, dispatchMusic] = useReducer(musicReducer, defaultValues, undefined)

  const loadMusicHandler = url => {
    dispatchMusic({ type: actionTypes.LOAD_MUSIC, payload: { url } })
    musicApi.current.src = url
    dispatchMusic({ type: actionTypes.INIT_DURATION, payload: { duration: musicApi.current.duration } })
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

  musicApi.current.addEventListener('loadedmetadata', () => {
    dispatchMusic({ type: actionTypes.INIT_DURATION, payload: { duration: musicApi.current.duration } })
    console.log(musicApi.current.duration)
  })

  musicApi.current.addEventListener('timeupdate', () => {
    dispatchMusic({ type: actionTypes.UPDATE_TIME, payload: { time: musicApi.current.currentTime } })
    console.log(musicApi.current.currentTime)
  })

  const providerValue = {
    musicUrls: musicState.musicUrls,
    isPlaying: musicState.isPlaying,
    loadMusic: loadMusicHandler,
    playMusic: playMusicHandler,
    pauseMusic: pauseMusicHandler,
    currentDuration: musicState.currentDuration,
    currentTime: musicState.currentTime
  }

  return <musicSlice.Provider value={providerValue}>{children}</musicSlice.Provider>
}
