import Stories from './Stories'

const Feed = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto'>
        <section className='col-span-2'>

      {/* Stories  */}
      <Stories />
      {/* Post */}
        </section>
        <section className='col-span-1 '>
            profile
            {/* profile */}
            {/* Suggestion */}
        </section>
    </div>
  )
}

export default Feed
