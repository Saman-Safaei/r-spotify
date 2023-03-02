import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { PlayIcon, ForwardIcon, BackwardIcon, PauseIcon } from '@heroicons/react/24/solid';
import musicSlice from '../../contexts/music/music-slice';

function MusicBar() {
  const musicCtx = useContext(musicSlice);
  const showTransition = musicCtx.musicUrls[0] ? '' : 'translate-y-full';
  const timeLineRef = useRef<HTMLDivElement>(null);

  const [musicTimelineLength, setMusicTimelineLength] = useState<number | undefined>(0);

  const setTimeHandler = useCallback(
    (ev: React.MouseEvent) => {
      musicCtx.setTimePercent((ev.nativeEvent.offsetX / (musicTimelineLength || 1)) * 100);
    },
    [musicCtx.setTimePercent, musicTimelineLength]
  );

  const musicToggleHandler = useCallback(() => {
    if (musicCtx.isPlaying) musicCtx.pauseMusic();
    else musicCtx.playMusic();
  }, [musicCtx]);

  useEffect(() => {
    setMusicTimelineLength(timeLineRef.current?.clientWidth);
  }, []);

  return (
    <div
      className={`fixed bottom-sidebar lg:bottom-0 right-0 left-0 lg:left-lg-sidebar bg-black px-8 py-4 z-10 ${showTransition} transition-transform duration-700`}>
      <div className='flex flex-row justify-center gap-6 pb-5'>
        <button onClick={musicCtx.backwardMusic} className='w-8 h-8'>
          <BackwardIcon className='w-full h-full' />
        </button>
        <button onClick={musicToggleHandler} className='w-8 h-8'>
          {musicCtx.isPlaying ? <PauseIcon className='w-full h-full' /> : <PlayIcon className='w-full h-full' />}
        </button>
        <button onClick={musicCtx.forwardMusic} className='w-8 h-8'>
          <ForwardIcon className='w-full h-full' />
        </button>
      </div>
      <div ref={timeLineRef} onClick={setTimeHandler} className='w-full mx-auto h-1 bg-neutral-900'>
        <div
          className='h-full bg-green-500'
          style={{ width: `${(musicCtx.currentTime / musicCtx.currentDuration) * 100}%` }}></div>
      </div>
    </div>
  );
}

export default MusicBar;
