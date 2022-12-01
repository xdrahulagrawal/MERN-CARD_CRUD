import express from 'express';
import { getPosts, createPost, updatePost,deletePost } from '../controllers/postsController.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/new', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);


export default router;