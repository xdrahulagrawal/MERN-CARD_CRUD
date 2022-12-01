import React, { useContext } from 'react'
import { PostContext } from './Home';
import '../assests/styles/showpost.css'

function ShowPost() {
  const { allPost } = useContext(PostContext);
  console.log('posts', allPost)
  return (
    <div className='show-post-container'>
      {allPost.map((post) => {
        return <div key={post._id}>
          <img src={post?.SelectedFile} width={300} height={300}/>
        </div>
      })}
    </div>
  )
}

export default ShowPost