import express from 'express';
import { likePost } from '../controllers/likePostContoller.js';
import { getPosts, createPost, updatePost,deletePost } from '../controllers/postsController.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/new', createPost);
router.put('/:id', updatePost);
router.delete('/delete/:id', deletePost);
router.put('/:id/likePost', likePost);


export default router;