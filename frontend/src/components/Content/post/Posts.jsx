
import Post from './Post'
import classes from './Posts.module.css'
import {useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Posts=({userId})=>{
const { isLoading, error, data } = useQuery(["posts"], () =>
 axios.get(`http://localhost:8800/api/posts?userId=`+userId,{  withCredentials: true}).then((res) => {
      return res.data;
    })
   
);

    // const [data,setData]=useState([]);
    // useEffect(()=>{
    //      axios.get("http://localhost:8800/api/posts").then(res=>{
    //         setData(res.data);
    //     }).catch(err=>{
    //         console.log(err);
    //     })
    // },[])
   return (
   <div className={classes.posts}>
         {error ? "Something went Wrong ": isLoading? "Loading...": data.map(post=>{
            return <Post post={post} key={post.id} />
        })}  
    </div>)
}
export default Posts;