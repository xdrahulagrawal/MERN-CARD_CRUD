import React, { useEffect, useState, createContext } from 'react'
import { _getPosts } from '../api'
import ShowPost from './ShowPost'
import CreatePost from './CreatePost'
import '../assests/styles/home.css'

export const PostContext = createContext(null);

function Home() {

  const [allPost, setAllPost] = useState([]);
  const [isFlag,setFlag]=useState(true)
  const [postID,setPostID] = useState('')

  const getposts = async () => {
    const result = await _getPosts()
    if (allPost) {
      setAllPost(result);
    }
  }

  useEffect(() => {
    getposts()
  }, [isFlag]);

  
  return (
    <div className='home-container'>
      <CreatePost setFlag={setFlag} isFlag={isFlag} postID={postID} setPostID={setPostID} allPost={allPost} getposts={getposts}/>
      <PostContext.Provider value={{ allPost,getposts,setPostID }}>
        <ShowPost />
      </PostContext.Provider>
    </div>
  )
}

export default Home