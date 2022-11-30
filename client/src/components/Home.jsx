import React, { useEffect, useState } from 'react'
import { _getPosts } from '../api'
import ShowPost from './ShowPost'
import CreatePost from './CreatePost'
import '../assests/styles/home.css'

function Home() {

  const [allPost, setAllPost] = useState([]);

  const getposts = async () => {
    const result = await _getPosts()
    if (allPost) {
      setAllPost(result);
    }
  }

  
  useEffect(() => {
    getposts()
  }, []);

  return (
    <div className='home-container'>
      <ShowPost />
      <CreatePost />
    </div>
  )
}

export default Home