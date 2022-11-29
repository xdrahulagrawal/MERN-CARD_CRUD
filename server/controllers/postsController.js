import Posts from '../models/postsModel.js';

export const getPosts = async (req, res) => {
    try {
        const posts = await Posts.find();
        res.status(200).json(posts);
    } catch (error) {
        console.error('Get Posts from db error')
        res.status(404).json({ message: error.message });
    }
}


export const createPost = async (req, res) => {
    const post = res.body;
    const newPost = new Posts(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        console.error('Create Posts')
        res.status(409).json({ message: error.message });
    }
}