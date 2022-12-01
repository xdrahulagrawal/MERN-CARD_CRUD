import React, { useEffect, useState } from 'react'
import FileBase from 'react-file-base64'
import { _editPosts, _sendPosts } from '../api'
import '../assests/styles/createpost.css'

const intinialValue = { creator: '', title: '', message: '', tags: '', SelectedFile: '' }
function CreatePost({ isFlag, setFlag, allPost, postID }) {
  const [postData, setPostData] = useState(intinialValue);

  const _handleSubmit = async () => {
    if (postID) {
      await _editPosts(postID, postData)
      setPostData(intinialValue)
    } else {
      await _sendPosts(postData);
      setPostData(intinialValue)
    }
  }

  useEffect(() => {
    const post = postID ? allPost.find(p => p._id === postID) : postData;
    setPostData(post)
  }, [postID]);

  return (
    <div>
      <h1>CreatePost</h1>
      <div className='create-post-container'>
        <input type="text" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <input type="text" value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <input type="text" value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
        <input type="text" value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />
        <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, SelectedFile: base64 })} />
        <button onClick={() => { _handleSubmit(); setFlag(!isFlag) }}>Submit</button>
      </div>
    </div>
  )
}

export default CreatePost