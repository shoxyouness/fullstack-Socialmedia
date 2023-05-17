import express from "express"
import { getFollowing, addFollow, unFollow } from "../controllers/relation.js";
const router=express.Router();

router.get("/",getFollowing);
router.post("/", addFollow);
router.delete("/",unFollow);


export default router;