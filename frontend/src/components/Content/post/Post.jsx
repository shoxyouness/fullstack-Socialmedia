
import classes from './Post.module.css'
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from './Comments';
import { useState,useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import {useQuery,useQueryClient,useMutation } from '@tanstack/react-query'
import axios from 'axios'

const Post=({post})=>{
    const [likes,setLikes]=useState([]);
    const [commentClicked,setCommentClicked]=useState(false);
    const {currentUser}=useContext(AuthContext);
    const { isLoading, error, data } = useQuery(["likes",post.id], () =>
    axios.get(`http://localhost:8800/api/likes?postId=${post.id}`).then((res) => {
    setLikes(res.data)
      return res.data;
    })
   
);
    const queryClient = useQueryClient();
    const mutation = useMutation(
    async(liked)=>{
    if(liked)
       await axios.delete("http://localhost:8800/api/likes?postId="+post.id,{withCredentials: true})
      else
        await axios.post("http://localhost:8800/api/likes",{postId:post.id},{withCredentials: true})

    }, {
    onSuccess: () => { 
      // Invalidate and refetch
      queryClient.invalidateQueries("likes")
    },
  })


    const likeHandler=(e)=>{
        mutation.mutate(likes.includes(currentUser.id))
    }

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
                {likes.includes(currentUser.id) ?<FavoriteOutlinedIcon style={{color:"red"}} onClick={likeHandler}/>:<FavoriteBorderOutlinedIcon onClick={likeHandler}/>}
                <span>{likes.length} likes</span>
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
            {commentClicked && <Comments postId={post.id}/>}
        </div>
    )
}   
export default Post;