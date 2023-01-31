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

  // Load music ---------------------------------
  const loadMusicHandler = url => {
    dispatchMusic({ type: actionTypes.LOAD_MUSIC, payload: { url } })
    musicApi.current.src = url
    dispatchMusic({ type: actionTypes.INIT_DURATION, payload: { duration: musicApi.current.duration } })
    musicApi.current.play().then()
  }
  const loadPlaylistHandler = urlList => {
    dispatchMusic({ type: actionTypes.LOAD_MUSIC, payload: { urlList } })
    if (urlList.length && urlList.length > 0) {
      musicApi.current.src = urlList[0]
      dispatchMusic({ type: actionTypes.INIT_DURATION, payload: { duration: musicApi.current.duration } })
      musicApi.current.play().then()
    }
  }
  // Play Music ---------------------------------
  const playMusicHandler = () => {
    if (!musicApi.current.src.trim()) return

    dispatchMusic({ type: actionTypes.PLAY_MUSIC })
    musicApi.current.play().then()
  }
  // Pause Music --------------------------------
  const pauseMusicHandler = () => {
    dispatchMusic({ type: actionTypes.PAUSE_MUSIC })
    musicApi.current.pause()
  }

  // on Music load
  musicApi.current.addEventListener('loadedmetadata', () => {
    dispatchMusic({ type: actionTypes.INIT_DURATION, payload: { duration: musicApi.current.duration } })
  })
  // on Music Time Updated
  musicApi.current.addEventListener('timeupdate', () => {
    dispatchMusic({ type: actionTypes.UPDATE_TIME, payload: { time: musicApi.current.currentTime } })
  })
  // on Music Ended
  musicApi.current.addEventListener('ended', () => {
    dispatchMusic({ type: actionTypes.UPDATE_TIME, payload: { time: 0 } })
    const isPlayingIndex = musicState.musicUrls.indexOf(musicApi.current.src)
    if (musicState.musicUrls.length > 1 && isPlayingIndex !== musicState.musicUrls.length - 1) {
      musicApi.current.src = musicState.musicUrls[isPlayingIndex + 1]
      musicApi.current.play().then()
    } else {
      musicApi.current.pause()
      musicApi.current.currentTime = 0
    }
  })

  const providerValue = {
    musicUrls: musicState.musicUrls,
    isPlaying: musicState.isPlaying,
    currentDuration: musicState.currentDuration,
    currentTime: musicState.currentTime,
    loadMusic: loadMusicHandler,
    playMusic: playMusicHandler,
    pauseMusic: pauseMusicHandler,
  }

  return <musicSlice.Provider value={providerValue}>{children}</musicSlice.Provider>
}
