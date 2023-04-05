import { Fragment, useState } from 'react';
import type { FC } from 'react';
import TabButton from '../components/Pages/YourLibrary/TabButton';

enum ETabs {
  PLAYLISTS,
  MUSICS,
  PODCAST,
  ALBUM,
}

const tabs = {
  [ETabs.PLAYLISTS]: 'playlist',
  [ETabs.MUSICS]: 'music',
  [ETabs.PODCAST]: 'podcast',
  [ETabs.ALBUM]: 'album',
};

export interface YourLibraryProps {}

const YourLibrary: FC<YourLibraryProps> = () => {
  const [currentTab, setCurrentTab] = useState(ETabs.PLAYLISTS);

  return (
    <Fragment>
      <div className='bg-gradient-to-b from-black to-black/40 p-4 flex flex-row items-center overflow-x-auto gap-2'>
        <TabButton onClick={() => setCurrentTab(ETabs.PLAYLISTS)} currentTab={currentTab} tabId={ETabs.PLAYLISTS}>
          Playlists
        </TabButton>
        <TabButton onClick={() => setCurrentTab(ETabs.MUSICS)} currentTab={currentTab} tabId={ETabs.MUSICS}>
          Musics
        </TabButton>
        <TabButton onClick={() => setCurrentTab(ETabs.PODCAST)} currentTab={currentTab} tabId={ETabs.PODCAST}>
          Podcasts
        </TabButton>
        <TabButton onClick={() => setCurrentTab(ETabs.ALBUM)} currentTab={currentTab} tabId={ETabs.ALBUM}>
          Albums
        </TabButton>
      </div>
      <div className='flex justify-center items-center px-4 py-20 text-xl text-center'>
        There is no {tabs[currentTab]} in your library
      </div>
    </Fragment>
  );
};

export default YourLibrary;
