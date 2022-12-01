import React, { useContext } from 'react'
import { PostContext } from './Home';
import '../assests/styles/showpost.css'

function ShowPost() {
  const { allPost } = useContext(PostContext);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className='show-post-container'>
      {allPost.map((post) => {
        return <div key={post._id} className='show-post-container-item'>
          <img src={post?.SelectedFile} width={300} height={200} />
          <div className='show-post-sub-container-1'>
            <p>{capitalizeFirstLetter(post?.title)}</p>
            <p><b>Like :</b> {post?.likeCount}</p>
          </div>
          <div className='show-post-sub-container-2'>
            <button>Delete</button>
            <button>Edit</button>
          </div>
        </div>
      })}
    </div>
  )
}

export default ShowPost