import React, { useContext } from 'react'
import { PostContext } from './Home';
import { _deletePosts, _editPosts } from '../api';
import '../assests/styles/showpost.css'
import Button from './Button';

function ShowPost() {
  const { allPost, getposts, setPostID } = useContext(PostContext);

  const _capitalizeFirstLetter = (string) => {
    return string?.charAt(0)?.toUpperCase() + string?.slice(1);
  }

  const _deletePostHandle = async (id) => {
    if(window.confirm('Are you sure you want to delete')){
      try {
        await _deletePosts(id);
        getposts()
      } catch (error) {
        console.error('_deletePost', error)
      }
    } }

  const _editPostHandle = async (id) => {
    try {
      setPostID(id)
      await _editPosts(id);
      getposts()
    } catch (error) {
      console.error('_editPostHandle', error)
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
            <Button method={_deletePostHandle} postId={post._id} label='Delete' />
            <Button method={_editPostHandle} postId={post._id} label='Edit' />
          </div>
        </div>
      })}
    </div>
  )
}

export default ShowPost