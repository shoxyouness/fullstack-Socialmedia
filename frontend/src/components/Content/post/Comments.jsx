

import classes from "./Comments.module.css"
import {useQuery,useQueryClient,useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useState,useContext } from "react"
import { AuthContext } from "../../../context/AuthContext"


const Comments=({postId})=>{
    const {currentUser}=useContext(AuthContext);
    const [comment,setComment]=useState('');
    const [err,setErr]=useState(false);
    const { isLoading, error, data } = useQuery(["comments"], () =>
    axios.get(`http://localhost:8800/api/comments?postId=${postId}`).then((res) => {
      return res.data;
    })
    );
    const queryClient = useQueryClient();
    const mutation = useMutation(
    async(inputs)=>{
       await axios.post("http://localhost:8800/api/comments",inputs,{withCredentials: true})
      
        
    }, {
    onSuccess: () => { 
      // Invalidate and refetch
      queryClient.invalidateQueries("comments")
    },
  })

    const submitHanlder=(e)=>{
        e.preventDefault();
        mutation.mutate({desc:comment,postId});
        setComment('');
    }
    return(
    <div className={classes.comments}>
        <form>
            <img src={currentUser.profilePic}/>
            <input type="text"  placeholder="Comments..." onChange={(e)=>{setComment(e.target.value)}} value={comment}/>
            <button onClick={submitHanlder}>Comment</button>
        </form>
        {isLoading? "Loading..." : data.map(comment=>{
            return(
                <div className={classes.comment}>
                    <img src={comment.profilePic}/>
                    <div className={classes.info}>
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div> 
                    <span className={classes.date}>{comment.date}</span>
                </div>
            )
        })}
    </div>
    )
}
export default Comments;