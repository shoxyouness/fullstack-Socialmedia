import express from "express";
import { getLikes, setLike, remouveLike } from "../controllers/like.js";
const router = express.Router();
router.get("/",getLikes);
router.post("/",setLike);
router.delete("/", remouveLike);
export default router;
