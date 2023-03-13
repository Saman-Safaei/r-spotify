import ChipProps from './ChipProps';

export default function Chip({children, onClick, ...props }: ChipProps) {
  return (
    <button
      className='bg-white/5 hover:bg-white/10 px-4 py-1 rounded-full transition duration-300'
      onClick={onClick} {...props}>
      {children}
    </button>
  );
}
