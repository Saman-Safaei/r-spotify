import type { FC, ReactNode, MouseEventHandler } from 'react';

export interface TabButtonProps {
  children?: ReactNode;
  currentTab: EnumType;
  tabId: EnumType;
  onClick?: MouseEventHandler;
}

const TabButton: FC<TabButtonProps> = ({ children, currentTab, tabId, onClick }) => {
  const isActive = currentTab === tabId;
  const activeClasses = isActive ? 'bg-neutral-700' : 'bg-neutral-800';
  
  return (
    <button onClick={onClick} className={`px-4 py-2 rounded-md ${activeClasses} hover:bg-neutral-700/70 active:bg-neutral-900 transition-colors duration-300`}>
      {children}
    </button>
  );
};

export default TabButton;
