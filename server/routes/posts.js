import express from 'express';
import { getPosts, createPost, updatePost } from '../controllers/postsController.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/new', createPost);
router.put('/:id', updatePost);


export default router;