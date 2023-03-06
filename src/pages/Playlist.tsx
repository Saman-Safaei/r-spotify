import { PlayIcon } from '@heroicons/react/24/solid';
import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { usePlaylist } from '../hooks/playlist';
import withAuth from '../hocs/with-auth';

function Playlist() {
  const { id } = useParams();

  const { response } = usePlaylist(id!);

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
              <tr>
                <td className='p-2'>1</td>
                <td className='p-2'>
                  <div className='flex flex-row items-center gap-4'>
                    <div className='inline-block w-12 h-12 shadow-white/5 shadow-md rounded-md'>
                      <img
                        src='/images/deepfocus.jpg'
                        alt='deepfocus'
                        className='w-full h-full object-cover rounded-md'
                      />
                    </div>
                    <div>
                      <p>Deep Focus</p>
                      <p className='text-xs text-gray-400'>Saman Safaei</p>
                    </div>
                  </div>
                </td>
                <td className='p-2'>Dark Rises</td>
                <td className='p-2'>7 Days ago</td>
                <td className='p-2'>6 mins</td>
              </tr>
              <tr>
                <td className='p-2'>2</td>
                <td className='p-2'>
                  <div className='flex flex-row items-center gap-4'>
                    <div className='inline-block w-12 h-12 shadow-white/5 shadow-md rounded-md'>
                      <img
                        src='/images/deepfocus.jpg'
                        alt='deepfocus'
                        className='w-full h-full object-cover rounded-md'
                      />
                    </div>
                    <div>
                      <p>Deep Focus</p>
                      <p className='text-xs text-gray-400'>Saman Safaei</p>
                    </div>
                  </div>
                </td>
                <td className='p-2'>Dark Rises</td>
                <td className='p-2'>7 Days ago</td>
                <td className='p-2'>6 mins</td>
              </tr>
              <tr className='group'>
                <td className='p-2 group-hover:bg-white/5 rounded-l-xl'>
                  <span className='block group-hover:hidden w-4'>3</span>
                  <button className="hidden group-hover:block">
                    <PlayIcon className='w-4 h-4 text-green-500' />
                  </button>
                </td>
                <td className='p-2 group-hover:bg-white/5'>
                  <div className='flex flex-row items-center gap-4'>
                    <div className='inline-block w-12 h-12 shadow-white/5 shadow-md rounded-md'>
                      <img
                        src='/images/deepfocus.jpg'
                        alt='deepfocus'
                        className='w-full h-full object-cover rounded-md'
                      />
                    </div>
                    <div>
                      <p>Deep Focus</p>
                      <p className='text-xs text-gray-400'>Saman Safaei</p>
                    </div>
                  </div>
                </td>
                <td className='p-2 group-hover:bg-white/5'>Dark Rises</td>
                <td className='p-2 group-hover:bg-white/5'>7 Days ago</td>
                <td className='p-2 group-hover:bg-white/5 rounded-r-xl'>6 mins</td>
              </tr>
              <tr>
                <td className='p-2'>4</td>
                <td className='p-2'>
                  <div className='flex flex-row items-center gap-4'>
                    <div className='inline-block w-12 h-12 shadow-white/5 shadow-md rounded-md'>
                      <img
                        src='/images/deepfocus.jpg'
                        alt='deepfocus'
                        className='w-full h-full object-cover rounded-md'
                      />
                    </div>
                    <div>
                      <p>Deep Focus</p>
                      <p className='text-xs text-gray-400'>Saman Safaei</p>
                    </div>
                  </div>
                </td>
                <td className='p-2'>Dark Rises</td>
                <td className='p-2'>7 Days ago</td>
                <td className='p-2'>6 mins</td>
              </tr>
              <tr>
                <td className='p-2'>5</td>
                <td className='p-2'>
                  <div className='flex flex-row items-center gap-4'>
                    <div className='inline-block w-12 h-12 shadow-white/5 shadow-md rounded-md'>
                      <img
                        src='/images/deepfocus.jpg'
                        alt='deepfocus'
                        className='w-full h-full object-cover rounded-md'
                      />
                    </div>
                    <div>
                      <p>Deep Focus</p>
                      <p className='text-xs text-gray-400'>Saman Safaei</p>
                    </div>
                  </div>
                </td>
                <td className='p-2'>Dark Rises</td>
                <td className='p-2'>7 Days ago</td>
                <td className='p-2'>6 mins</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
}

export default withAuth(Playlist);
