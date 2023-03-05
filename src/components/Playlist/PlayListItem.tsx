import { useContext } from 'react';
import { PlayIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import musicSlice from '../../contexts/music/music-slice';
import { AuthButton } from '../../hocs/with-auth';

interface PlayListItemProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  href: string;
  playable?: boolean;
  musicList?: string[];
}

export default function PlayListItem({
  imgSrc = '',
  imgAlt = '',
  title = '',
  description = '',
  href = '/',
  playable = true,
  musicList = [],
}: PlayListItemProps) {
  const musicCtx = useContext(musicSlice);
  return (
    <div className='relative group flex flex-col items-stretch gap-4 p-4 rounded-lg bg-neutral-800/50 hover:bg-neutral-800 transition-colors duration-300'>
      <div className='relative w-full'>
        <img src={imgSrc} alt={imgAlt} className='w-full rounded-md aspect-square object-center' loading='lazy' />
        {playable && (
          <AuthButton
            onClick={() => musicCtx.loadPlaylist(musicList)}
            className='h-12 w-12 p-3 cursor-pointer z-10 rounded-full bg-green-500 absolute bottom-4 md:bottom-2 md:opacity-0 md:group-hover:bottom-4 md:group-hover:opacity-100 right-4 transition-all duration-300'>
            <PlayIcon className='w-full h-full text-black' />
          </AuthButton>
        )}
      </div>
      <div className='px-1'>
        <h4 className='mb-1 font-bold text-white'>{title}</h4>
        <p className='text-sm text-gray-400'>{description}</p>
      </div>
      <Link to={href} className='absolute inset-0 z-[1]'></Link>
    </div>
  );
}
