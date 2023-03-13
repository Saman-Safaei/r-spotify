import PlayListContainer from '../components/Playlist/PlayListContainer';
import PlayListItem from '../components/Playlist/PlayListItem';
import { usePlaylists } from '../hooks/playlist';

function Home() {
  const { data, isSuccess } = usePlaylists(0, 4);

  return (
    <div className='flex flex-col items-stretch gap-4 py-4 px-6'>
      <PlayListContainer title='Focus' href='/category/2341'>
        <PlayListItem
          title='Peaceful Piano'
          description='Relax and indulge with beatiful piano pieces'
          href='/playlist/65436'
          imgSrc='/images/peacefulpiano.jpg'
          imgAlt='peaceful-piano'
        />
        <PlayListItem
          title='Deep Focus'
          description='Keep calm and focus with ambient and post-rock ...'
          href='/playlist/65436'
          imgSrc='/images/deepfocus.jpg'
          imgAlt='deep-focus'
        />
        <PlayListItem
          title='Instrumental Study'
          description='Focus with soft study music in the background'
          href='/playlist/65436'
          imgSrc='/images/instrumentalstudy.jpg'
          imgAlt='instrumental-study'
        />
        <PlayListItem
          title='Chill Lofi Study Beats'
          description='The perfect study beats, find your focus, crush your...'
          href='/playlist/65436'
          imgSrc='/images/chilllofistudybeats.jpg'
          imgAlt='chill-lofi-study-beats'
        />
        <PlayListItem
          title='Jazz Vibes'
          description='The original chill instrumental beats playlist'
          href='/playlist/65436'
          imgSrc='/images/jazzvibes.jpg'
          imgAlt='deep-focus'
        />
      </PlayListContainer>

      <PlayListContainer title='Another Songs' href='/category/2341'>
        <PlayListItem
          title='All Songs'
          description='Browse all songs in RSpotify...'
          href='/genre/all'
          imgSrc='/images/deepfocus.jpg'
          imgAlt='all'
          playable={false}
        />
        {isSuccess
          ? data?.map(playList => (
              <PlayListItem
                key={playList.id}
                href={`/playlist/${playList.id}`}
                title={playList.name}
                musicList={playList.musics.map(music => `${process.env.REACT_APP_FILE_URL}/${music}`)}
                description={playList.description}
                imgAlt={playList.name}
                imgSrc={`${process.env.REACT_APP_FILE_URL}/${playList.imageCover}`}
                playable={true}
              />
            ))
          : null}
      </PlayListContainer>
    </div>
  );
}

export default Home;
