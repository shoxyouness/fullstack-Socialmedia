import express from "express";
import { getComments, setComment } from "../controllers/comment.js";
const router = express.Router();
router.get("/", getComments);
router.post("/", setComment);

export default router; 
