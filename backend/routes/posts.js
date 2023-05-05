import express from "express";
import {getPosts, setPost} from "../controllers/post.js";
const router = express.Router();

router.get("/",getPosts);
router.post("/",setPost)

export default router;
