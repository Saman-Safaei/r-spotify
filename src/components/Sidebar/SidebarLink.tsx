import { Link, useMatch } from 'react-router-dom';
import { ReactNode } from 'react';

interface SidebarLinkProps {
  icon: ReactNode;
  title: string;
  path: string;
}

function SidebarLink({ icon, title, path = '#' }: SidebarLinkProps) {
  const isPathMatch = useMatch(path);
  const textColor = isPathMatch ? 'text-gray-100' : 'text-gray-400';

  return (
    <li>
      <Link to={path} className={`flex flex-row items-center gap-3 ${textColor} transition-colors duration-300`}>
        {icon}
        <span className='text-sm hidden lg:inline-block'>{title}</span>
      </Link>
    </li>
  );
}

export default SidebarLink;
