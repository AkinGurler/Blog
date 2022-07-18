import express from "express"
import {createPost, getPosts} from "../controllers/posts.js";


const router=express.Router();

///posts port:5000

router.get("/", getPosts)
router.post("/",createPost)

export default router;
