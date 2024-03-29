import { EllipsisHorizontalIcon, HeartIcon, PlayIcon } from '@heroicons/react/24/solid';
import { Fragment, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { usePlaylist } from '../hooks/playlist';
import withAuth from '../hocs/with-auth';
import PlaylistMusic from '../components/Pages/Playlist/PlaylistMusic';
import musicSlice from '../contexts/music/music-slice';
import { usePlaylistLike } from '../hooks/likes';

function Playlist() {
  const { id } = useParams();

  if (!id || isNaN(+id)) throw new Response(null, { status: 404, statusText: 'Not Found' });
  const musicCtx = useContext(musicSlice);

  const { response, refetch } = usePlaylist(id!);
  const musics = response?.data.musics;

  const playMusicsOfPlaylistHandler = () => {
    if (musics) musicCtx.loadPlaylist(musics.map(music => `${process.env.REACT_APP_FILE_URL}/${music.musicFile}`));
  };

  const { mutate, isLoading } = usePlaylistLike(+id, () => {
    refetch();
  });

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
          <h3 className='text-4xl sm:text-6xl font-bold text-white'>{response?.data.title || 'Loading ...'}</h3>
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
        <div className='flex items-center gap-4 mb-8'>
          <button
            onClick={playMusicsOfPlaylistHandler}
            className='block w-14 h-14 p-4 rounded-full bg-green-500 hover:bg-green-400 text-black'>
            <PlayIcon className='w-full h-full' />
          </button>
          <button className='w-10 h-10 ml-auto'>
            <EllipsisHorizontalIcon className='w-full h-full' />
          </button>
          <button className='w-10 h-10' onClick={() => mutate()} disabled={isLoading}>
            <HeartIcon
              className={`w-full h-full ${
                response?.data.like ? 'text-red-500' : 'text-gray-500'
              } transition-all duration-300`}
            />
          </button>
        </div>
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
                  musicUrl={`${process.env.REACT_APP_FILE_URL}/${music.musicFile}`}
                  musicNumber={index + 1}
                  musicCover={`${process.env.REACT_APP_FILE_URL}/${music.imageCover}`}
                  musicName={music.title}
                  singerName={music.singer.firstname}
                  albumName={music.album.name}
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
