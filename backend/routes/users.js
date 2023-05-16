import express  from "express";
import { getProfile } from "../controllers/user.js";
const router = express.Router();
router.get("/find/:userId",getProfile);

export default router;
