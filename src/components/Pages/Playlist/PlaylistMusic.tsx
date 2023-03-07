import React from 'react';
import { PlayIcon } from '@heroicons/react/24/solid';
import PlaylistMusicProps from './PlaylistMusicProps';

function PlaylistMusic({
  className = '',
  musicNumber,
  musicCover,
  musicName,
  singerName,
  albumName,
  uploadDay,
  musicDuration,
  musicUrl,
  ...props
}: PlaylistMusicProps) {
  return (
    <tr className={`group ${className}`} {...props}>
      <td className='p-2 group-hover:bg-white/5 rounded-l-xl'>
        <span className='block group-hover:hidden w-4'>{musicNumber}</span>
        <button className='hidden group-hover:block'>
          <PlayIcon className='w-4 h-4 text-green-500' />
        </button>
      </td>
      <td className='p-2 group-hover:bg-white/5'>
        <div className='flex flex-row items-center gap-4'>
          <div className='inline-block w-12 h-12 shadow-white/5 shadow-md rounded-md'>
            <img
              src={musicCover}
              alt={musicName}
              className='w-full h-full object-cover rounded-md'
            />
          </div>
          <div>
            <p>{musicName}</p>
            <p className='text-xs text-gray-400'>{singerName}</p>
          </div>
        </div>
      </td>
      <td className='p-2 group-hover:bg-white/5'>{albumName}</td>
      <td className='p-2 group-hover:bg-white/5'>{uploadDay}</td>
      <td className='p-2 group-hover:bg-white/5 rounded-r-xl'>{musicDuration}</td>
    </tr>
  );
}

export default PlaylistMusic;
