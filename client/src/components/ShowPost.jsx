import React, { useContext } from 'react'
import { PostContext } from './Home';
import { _deletePosts } from '../api';
import '../assests/styles/showpost.css'
import Button from './Button';

function ShowPost() {
  const { allPost, getposts } = useContext(PostContext);

  const _capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const _deletePost = async (id) => {
    try {
      await _deletePosts(id);
      getposts()
    } catch (error) {
      console.error('_deletePost', error)
    }
  }

  return (
    <div className='show-post-container'>
      {allPost.map((post) => {
        return <div key={post._id} className='show-post-container-item'>
          <img src={post?.SelectedFile} width={300} height={200} />
          <div className='show-post-sub-container-1'>
            <p>{_capitalizeFirstLetter(post?.title)}</p>
            <p><b>Like :</b> {post?.likeCount}</p>
          </div>
          <div className='show-post-sub-container-2'>
            <Button method={_deletePost} postId={post._id} label='Delete' />
            <Button postId={post._id} label='Edit' />
          </div>
        </div>
      })}
    </div>
  )
}

export default ShowPost