import { PlayIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

export default function PlayListItem({
  imgSrc = '',
  imgAlt = '',
  title = '',
  description = '',
  href = '/',
}) {
  return (
    <div className='relative group flex flex-col items-stretch gap-4 p-4 rounded-lg bg-neutral-800/50 hover:bg-neutral-800 transition-colors duration-300'>
      <div className='relative w-full'>
        <img src={imgSrc} alt={imgAlt} className='w-full rounded-md' />
        <button className='h-12 w-12 p-3 cursor-default z-10 rounded-full bg-green-500 absolute bottom-4 md:bottom-2 md:opacity-0 md:group-hover:bottom-4 md:group-hover:opacity-100 right-4 transition-all duration-300'>
          <PlayIcon className='w-full h-full text-black' />
        </button>
      </div>
      <div className='px-1'>
        <h4 className='mb-1 font-bold text-white'>{title}</h4>
        <p className='text-sm text-gray-400'>{description}</p>
      </div>
      <Link to={href} className='absolute inset-0'></Link>
    </div>
  )
}
