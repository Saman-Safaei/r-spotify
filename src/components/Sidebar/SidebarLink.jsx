import { Link, useMatch } from 'react-router-dom'

function SidebarLink({ icon, title, path = '#' }) {
  const isPathMatch = useMatch(path)
  const textColor = isPathMatch ? 'text-gray-100' : 'text-gray-400'
  return (
    <li>
      <Link
        to={path}
        className={`flex flex-row items-center gap-3 ${textColor}`}>
        {icon}
        <span className='text-sm hidden lg:inline-block'>{title}</span>
      </Link>
    </li>
  )
}

export default SidebarLink
