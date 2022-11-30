import React, { useContext } from 'react'
import { PostContext } from './Home';

function ShowPost() {
  const posts = useContext(PostContext);
  return (
    <div>ShowPost</div>
  )
}

export default ShowPost