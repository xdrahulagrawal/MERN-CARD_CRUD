import mongoose from "mongoose";

const postsSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    SelectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },

});


const Posts = mongoose.model('Posts', postsSchema);
export default Posts;
