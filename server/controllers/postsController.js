import mongoose from 'mongoose';
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
    const post = req.body;
    const newPost = new Posts(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        console.error('Create Posts')
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send({ message: 'No post with that id' })
    }
    try {
        const updatePost = await Posts.findByIdAndUpdate(_id, {...post,_id}, { new: true })
        res.json(updatePost)
    } catch (error) {
        console.error('Update Posts')
        res.status(409).json({ message: error.message });
    }
}
export const deletePost = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send({ message: 'No post with that id' })
    }
    try {
        await Posts.findByIdAndDelete(id)
        res.json({ message: 'Post delete Successfully' })
    } catch (error) {
        console.error('Update Posts')
        res.status(409).json({ message: error.message });
    }
}

