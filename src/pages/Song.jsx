import { Fragment, useContext, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import useSongById from '../hooks/song-by-id'
import musicSlice from '../contexts/music/music-slice'
import { PlayIcon } from '@heroicons/react/24/solid'
import withAuth from "../hocs/with-auth";

function Song() {
  const params = useParams()
  const navigate = useNavigate()
  const pageId = +params.id
  const { data, isLoading, isError } = useSongById(pageId)
  const musicCtx = useContext(musicSlice)

  useEffect(() => {
    if (isNaN(pageId)) navigate(-1)
  }, [])

  if (isLoading) return <div>Loading</div>
  if (isError) return <div>Somethings went wrong...</div>

  return (
    <Fragment>
      <div className='flex flex-col items-center sm:flex-row p-4 bg-gradient-to-b gap-6 from-white/20 to-transparent'>
        <div className='w-52 h-52 shrink-0'>
          <img
            src={`${process.env.REACT_APP_FILE_URL}/${data.imageCover}`}
            alt='song-cover'
            className='w-full h-full rounded-md object-cover shadow-lg'
          />
        </div>
        <div className='flex flex-col items-center sm:items-start gap-3 text-center sm:text-start'>
          <h4 className='text-xs'>SONG</h4>
          <h3 className='text-4xl sm:text-6xl font-bold text-white'>{data.title}</h3>
          <p className='text-gray-300' dir='auto'>
            Song by: {data.singer?.firstname} {data.singer?.lastname}
          </p>
          <h5 className='text-gray-300'>
            <span className='text-gray-400'>{data.duration} seconds</span>
          </h5>
        </div>
      </div>
      <div>
        <button
          onClick={() => musicCtx.loadMusic(`${process.env.REACT_APP_FILE_URL}/${data.musicFile}`)}
          className='w-14 h-14 p-3 bg-green-500 rounded-full'>
          <PlayIcon className='w-full h-full text-black' />
        </button>
      </div>
    </Fragment>
  )
}

export default withAuth(Song)
