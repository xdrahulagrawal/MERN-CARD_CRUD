import axios from 'axios';

const URL = 'http://localhost:5000/posts'
export const _getPosts = async () => {
    const response = await axios.get(URL)
    return response ? response.data : []
}


export const _sendPosts = async (data) => {
    const response = await axios.post(`${URL}/new`,data)
    return response ? response.data : []
}