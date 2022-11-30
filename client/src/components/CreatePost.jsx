import React, { useState } from 'react'
import FileBase from 'react-file-base64'
import { _sendPosts } from '../api'


function CreatePost() {
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', SelectedFile: '' })

  const _handleSubmit = async () => {
    await _sendPosts(postData)
  }

  return (
    <div>
      <h1>CreatePost</h1>
      <input type="text" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
      <input type="text" value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
      <input type="text" value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
      <input type="text" value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />
      <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, SelectedFile: base64 })} />
      <button onClick={_handleSubmit}>Submit</button>
    </div>
  )
}

export default CreatePost