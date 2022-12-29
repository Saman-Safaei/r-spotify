import { Link } from 'react-router-dom'

export default function PlayListContainer({ children, title = '', href = '' }) {
  return (
    <div>
      <div className='flex flex-row justify-between items-baseline mb-4'>
        <h3 className='font-bold text-2xl'>{title}</h3>
        <Link
          to={href}
          className='uppercase text-xs text-gray-300 hover:underline tracking-wider'>
          Show All
        </Link>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4'>
        {children}
      </div>
    </div>
  )
}
