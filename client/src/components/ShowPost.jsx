import React, { useContext } from 'react'
import { PostContext } from './Home';
import { _deletePosts, _editPosts, _likedPosts } from '../api';
import Button from './Button';
import '../assests/styles/showpost.css'

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
  const _likedPostHandle = async (id) => {
    try {
      await _likedPosts(id);
      getposts()
    } catch (error) {
      console.error('_likedPostHandle', error)
    }
  }

  return (
    <div className='show-post-container'>
      {allPost.map((post) => {
        return <div key={post._id} className='show-post-container-item'>
          <img src={post?.SelectedFile} width={300} height={200} />
          <div className='show-post-sub-container-1'>
            <p>{_capitalizeFirstLetter(post?.title)}</p>
            <p><Button method={_likedPostHandle} postId={post._id} label='Like'  className='like-btn'/> {post?.likeCount}</p>
          </div>
          <div className='show-post-sub-container-2'>
            <Button method={_deletePostHandle} postId={post._id} label='Delete' className=' btn delete-btn' />
            <Button method={_editPostHandle} postId={post._id} label='Edit' className='btn edit-btn' />
          </div>
        </div>
      })}
    </div>
  )
}

export default ShowPost