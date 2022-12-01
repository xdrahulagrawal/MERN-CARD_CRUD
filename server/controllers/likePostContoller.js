import mongoose from 'mongoose';
import Posts from '../models/postsModel.js';

export const likePost = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send({ message: 'No post with that id' })
    }
    try {
        const post = await Posts.findById(id);
        const updatedPost = await Posts.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 },{new :true});
        res.json(updatedPost)
    } catch (error) {
        console.error('Update Posts')
        res.status(409).json({ message: error.message });
    }
}