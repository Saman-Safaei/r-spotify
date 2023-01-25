import { PlayIcon } from '@heroicons/react/24/solid'
import { Fragment } from 'react'
import {} from 'react-router-dom'

function Playlist() {
  return (
    <Fragment>
      <div className='flex flex-col items-center sm:flex-row p-4 bg-gradient-to-b gap-6 from-white/20 to-white/5'>
        <div className='w-52 h-52 shrink-0'>
          <img
            src='/images/deepfocus.jpg'
            alt='playlist-logo'
            className='w-full h-full rounded-md object-cover shadow-lg'
          />
        </div>
        <div className='flex flex-col items-center sm:items-start gap-3 text-center sm:text-start'>
          <h4 className='text-xs'>Playlist</h4>
          <h3 className='text-4xl sm:text-6xl font-bold text-white'>
            Deep Focus
          </h3>
          <p className='text-gray-300'>
            Keep calm and focus with ambient and post-rock music.
          </p>
          <h5 className='text-gray-300'>
            5 Songs, <span className='text-gray-400'>1 hr 30 mins</span>
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
              <tr>
                <td className='p-2'>3</td>
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
  )
}

export default Playlist
