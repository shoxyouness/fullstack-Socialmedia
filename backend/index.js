import express from "express";
import userRouter from "./routes/users.js";
import postsRouter from "./routes/posts.js";
import authRouter from "./routes/auth.js";
import likesRouter from "./routes/likes.js";
import commentsRouter from "./routes/comments.js";
import cors from "cors"
import cookieParser from "cookie-parser";
import UploadRouter from "./routes/upload.js";

const app = express();



//middleware
app.use((req,res,next)=>{
  res.header( "Access-Control-Allow-Credentials",true );
  next();
})
app.use(express.json());
app.use(cors(
  {origin:"http://localhost:3000"}
));
app.use(cookieParser()); 


app.use("/api/upload", UploadRouter);
app.use("/api/users", userRouter);
app.use("/api/posts", postsRouter);
app.use("/api/auth", authRouter);
app.use("/api/comments", commentsRouter); 
app.use("/api/likes", likesRouter);

app.listen(8800, () => {
  console.log("localhost:8800");
});
