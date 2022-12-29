import PlayListContainer from '../components/Playlist/PlayListContainer'
import PlayListItem from '../components/Playlist/PlayListItem'

function Home() {
  return (
    <div className='py-4 px-6'>
      <PlayListContainer title='Focus' href='/category/2341'>
        <PlayListItem
          title='Deep Focus'
          description='Keep calm and focus with ambient and post-rock ...'
          href='/playlist/65436'
          imgSrc='/images/deepfocus.jpg'
          imgAlt='deep-focus'
        />
        <PlayListItem
          title='Deep Focus'
          description='Keep calm and focus with ambient and post-rock ...'
          href='/playlist/65436'
          imgSrc='/images/deepfocus.jpg'
          imgAlt='deep-focus'
        />
        <PlayListItem
          title='Deep Focus'
          description='Keep calm and focus with ambient and post-rock ...'
          href='/playlist/65436'
          imgSrc='/images/deepfocus.jpg'
          imgAlt='deep-focus'
        />
        <PlayListItem
          title='Deep Focus'
          description='Keep calm and focus with ambient and post-rock ...'
          href='/playlist/65436'
          imgSrc='/images/deepfocus.jpg'
          imgAlt='deep-focus'
        />
        <PlayListItem
          title='Deep Focus'
          description='Keep calm and focus with ambient and post-rock ...'
          href='/playlist/65436'
          imgSrc='/images/deepfocus.jpg'
          imgAlt='deep-focus'
        />
      </PlayListContainer>
    </div>
  )
}

export default Home
