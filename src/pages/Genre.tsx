import React from 'react';
import useAllSongs from '../hooks/all-songs';
import GridContainer from '../components/UI/GridContainer';
import MusicItem from '../components/Music/MusicItem';

export default function Genre() {
  const { data, fetchNext, isSuccess, isLoading, hasNextPage } = useAllSongs();

  const musics =
    isSuccess &&
    data?.map(music => (
      <MusicItem
        key={music.id}
        duration={music.duration}
        id={music.id}
        title={music.title}
        imageCover={music.imageCover}
      />
    ));

  if (isLoading)
    return (
      <div className='p-6 min-h-[20rem] flex justify-center items-center'>
        <h3>Loading</h3>
      </div>
    );

  return (
    <div className='pb-10'>
      <GridContainer>{musics}</GridContainer>
      <div className='flex flex-row justify-center'>
        {hasNextPage && (
          <button onClick={() => fetchNext} className='bg-green-600 px-8 py-2.5 rounded-md'>
            Load more
          </button>
        )}
      </div>
    </div>
  );
}
