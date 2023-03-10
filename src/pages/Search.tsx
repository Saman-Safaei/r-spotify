import { useSearch } from '../hooks/search';
import GridContainer from '../components/UI/GridContainer';
import MusicItem from '../components/Music/MusicItem';
import PlayListItem from '../components/Playlist/PlayListItem';

function Search() {
  const { data, onQueryChange, inputRef } = useSearch();

  return (
    <div className='py-4 px-6'>
      <div className='bg-black/20 rounded'>
        <input className='w-full py-4 px-4' ref={inputRef} onInput={onQueryChange} type='text' placeholder='Search' />
      </div>
      <GridContainer>
        {data?.map((item, key) => {
          if ('musicFile' in item)
            return (
              <MusicItem
                key={key}
                id={item.id}
                duration={item.duration}
                imageCover={item.imageCover}
                title={item.title}
              />
            );
          else
            return (
              <PlayListItem
                key={key}
                imgSrc={`${process.env.REACT_APP_FILE_URL}/${item.imageCover}`}
                imgAlt={item.title}
                title={item.title}
                description={item.description}
                href={`/playlist/${item.id}`}
                musicList={item.musics.map(music => `${process.env.REACT_APP_FILE_URL}/${music}`)}
                playable={true}
              />
            );
        })}
      </GridContainer>
    </div>
  );
}

export default Search;
