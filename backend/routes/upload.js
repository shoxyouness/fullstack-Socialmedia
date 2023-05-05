import express from "express";
import multer from "multer";

const router = express.Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../frontend/public/upload");
  }, 
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
}); 
const upload = multer({ storage: storage });
 
router.post("/", upload.single("file"), function (req, res) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  const file = req.file;
  res.status(200).json(file.filename);

});
export default router; 
