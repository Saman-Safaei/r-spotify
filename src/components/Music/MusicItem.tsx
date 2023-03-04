import {AuthLink} from "../../hocs/with-auth";

interface MusicItemProps {
  id: number;
  duration: number;
  imageCover: string;
  title: string;
}

function MusicItem({ id, duration, imageCover, title }: MusicItemProps) {

  return (
    <div className='relative flex flex-col items-stretch gap-4 p-4 rounded-lg bg-neutral-800/50 hover:bg-neutral-800 transition-colors duration-300'>
      <div>
        <img
          className='aspect-square w-full object-cover rounded bg-neutral-700/50'
          src={`${process.env.REACT_APP_FILE_URL}/${imageCover}`}
          alt={title}
        />
      </div>
      <div>
        <h3 dir='auto' className='font-bold'>
          {title}
        </h3>
      </div>
      <div className='mt-auto'>
        <h4 className='text-xs text-gray-500'>Duration: {duration}sec</h4>
      </div>
      <AuthLink to={`/song/${id}`} className='absolute inset-0 z-[1]'></AuthLink>
    </div>
  );
}

export default MusicItem;
