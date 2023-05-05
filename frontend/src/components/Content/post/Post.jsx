
import classes from './Post.module.css'
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from './Comments';
import { useState } from 'react';
const Post=({post})=>{
    const [commentClicked,setCommentClicked]=useState(false);
    return(
        <div className={classes.post}>
            <div className={classes.info}>
                <div className={classes.user}>
                    <img src={post.profilePic}/>
                    <div>
                        <Link  to={`/profile/${post.userId}` } style={{textDecoration:"none", color:"inherit"}}> <span>{post.name}</span></Link>                  
                    <span className={classes.date}>1 Min Ago</span>
                    </div>
                </div>
                <MoreHorizIcon />
            </div>
            <div className={classes.content}>
                <div>
                    <span>{post.desc}</span>
                </div>
               {post.img!="" && <img src={"./upload/"+post.img} />}
            </div>
            <div className={classes.features}>
                <div>
                <FavoriteBorderOutlinedIcon/>
                <span>Like</span>
                </div>
               <div  onClick={()=>{
                    setCommentClicked((prev)=>{
                        return !prev;
                    })
               }}>
                <TextsmsOutlinedIcon/>
                <span>Comment</span>
                </div>
                <div>
                <ShareOutlinedIcon/>
                <span>Share</span>
                </div>
            </div>
            {commentClicked && <Comments/>}
        </div>
    )
}   
export default Post;