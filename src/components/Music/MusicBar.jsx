import { useCallback, useContext } from 'react'
import { PlayIcon, ForwardIcon, BackwardIcon, PauseIcon } from '@heroicons/react/24/solid'
import musicSlice from '../../contexts/music/music-slice'

function MusicBar() {
  const musicCtx = useContext(musicSlice)

  const musicToggleHandler = useCallback(() => {
    if (musicCtx.isPlaying) musicCtx.pauseMusic()
    else musicCtx.playMusic()
  }, [musicCtx.isPlaying])

  return (
    <div className='fixed bottom-sidebar lg:bottom-0 right-0 left-0 lg:left-lg-sidebar bg-black px-8 py-4 z-10'>
      <div className='flex flex-row justify-center gap-6 pb-5'>
        <button className='w-8 h-8'>
          <BackwardIcon className='w-full h-full' />
        </button>
        <button onClick={musicToggleHandler} className='w-8 h-8'>
          {musicCtx.isPlaying ? <PauseIcon className='w-full h-full' /> : <PlayIcon className='w-full h-full' />}
        </button>
        <button className='w-8 h-8'>
          <ForwardIcon className='w-full h-full' />
        </button>
      </div>
      <div className='w-full mx-auto h-1 bg-neutral-900'>
        <div
          className='h-full bg-green-500'
          style={{ width: `${(musicCtx.currentTime/ musicCtx.currentDuration) * 100}%` }}></div>
      </div>
    </div>
  )
}

export default MusicBar
