import axios from 'axios';

const URL = 'http://localhost:5000/posts'
export const _getPosts = async () => {
    try {
        const response = await axios.get(URL)
        return response ? response.data : []
    } catch (error) {
        console.error("_getPosts", error)
    }
}

export const _sendPosts = async (data) => {
    try {
        const response = await axios.post(`${URL}/new`, data)
        return response ? response.data : []
    } catch (error) {
        console.error("_sendPosts", error)
    }
}

export const _deletePosts = async (id) => {
    try {
        const response = await axios.delete(`${URL}/delete/${id}`)
        return response.status===200 ? response.data : []
    } catch (error) {
        console.error("_sendPosts", error)
    }
}
export const _editPosts = async (id,data) => {
    try {
        const response = await axios.put(`${URL}/${id}`,data)
        return response.status===200 ? response.data : []
    } catch (error) {
        console.error("_editPosts", error)
    }
}

export const _likedPosts = async (id) => {
    try {
        const response = await axios.put(`${URL}/${id}/likePost`)
        return response.status===200 ? response.data : []
    } catch (error) {
        console.error("_likedPosts", error)
    }
}