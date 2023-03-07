import { PlayIcon } from '@heroicons/react/24/solid';
import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { usePlaylist } from '../hooks/playlist';
import withAuth from '../hocs/with-auth';
import PlaylistMusic from '../components/Pages/Playlist/PlaylistMusic';

function Playlist() {
  const { id } = useParams();

  const { response } = usePlaylist(id!);
  const musics = response?.data.musics;

  return (
    <Fragment>
      <div className='flex flex-col items-center sm:flex-row p-4 bg-gradient-to-b gap-6 from-white/20 to-transparent'>
        <div className='w-52 h-52 shrink-0'>
          <img
            src={`${process.env.REACT_APP_FILE_URL}/${response?.data.imageCover}`}
            alt='playlist-logo'
            className='w-full h-full rounded-md object-cover shadow-lg'
          />
        </div>
        <div className='flex flex-col items-center sm:items-start gap-3 text-center sm:text-start'>
          <h4 className='text-xs'>Playlist</h4>
          <h3 className='text-4xl sm:text-6xl font-bold text-white'>{response?.data.name || 'Loading ...'}</h3>
          <p className='text-gray-300'>{response?.data.description}</p>
          <h5 className='text-gray-300'>
            {response?.data.musics.length || '?'} Songs,{' '}
            <span className='text-gray-400'>
              {response?.data.musics.map(music => music.duration).reduce((p, n) => p + n)} secs
            </span>
          </h5>
        </div>
      </div>
      <div className='p-4'>
        <button className='block w-14 h-14 p-4 rounded-full bg-green-500 hover:bg-green-400 text-black mb-8'>
          <PlayIcon className='w-full h-full' />
        </button>
        <div className='overflow-auto c-scroll'>
          <table className='min-w-full whitespace-nowrap'>
            <thead className='text-start font-normal text-gray-400 border-solid border-b border-b-white/10'>
              <tr>
                <th className='text-start font-normal p-2 w-0'>#</th>
                <th className='text-start font-normal p-2'>Title</th>
                <th className='text-start font-normal p-2'>Album</th>
                <th className='text-start font-normal p-2'>Date Added</th>
                <th className='text-start font-normal p-2'>Duration</th>
              </tr>
            </thead>
            <tbody>
              {musics?.map((music, index) => (
                <PlaylistMusic
                  key={music.id}
                  musicUrl={music.musicFile}
                  musicNumber={index + 1}
                  musicCover={`${process.env.REACT_APP_FILE_URL}/${music.imageCover}`}
                  musicName={music.title}
                  singerName={music.singer.firstname}
                  albumName={music.album}
                  uploadDay={music.publishDate}
                  musicDuration={music.duration}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
}

export default withAuth(Playlist);
