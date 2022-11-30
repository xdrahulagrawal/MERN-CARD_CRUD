import express from 'express';
import {getPosts,createPost} from '../controllers/postsController.js';


const router = express.Router();


router.get('/', getPosts);
router.post('/new', createPost);


export default router;