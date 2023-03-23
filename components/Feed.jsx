import Stories from './Stories'
import Posts from './Posts'
import MiniProfile from './MiniProfile'


const Feed = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto'>
        <section className='col-span-2'>

      {/* Stories  */}
      <Stories />
      {/* Post */}
      <Posts />        </section>
        <section className='col-span-1 '>
            <MiniProfile />
            {/* profile */}
            {/* Suggestion */}
        </section>
    </div>
  )
}

export default Feed
