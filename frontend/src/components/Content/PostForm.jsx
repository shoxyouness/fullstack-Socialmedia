
import classes from './PostForm.module.css'
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import { Button, IconButton } from '@mui/material';
import {useQueryClient,useMutation } from '@tanstack/react-query'
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';


export  const PostForm =()=>{

    const [file,setFile]=useState(null);
    const [desc,setDesc]=useState("");

    const [err,setErr]=useState(null);
    const {currentUser}=useContext(AuthContext);

    //Upload the Image 
    const upload=async ()=>{
        try{

        const formData=new FormData();
        formData.append("file",file);
        const res=await axios.post("http://localhost:8800/api/upload",formData);
        console.log(res.data);
        return res.data;
    }
        catch(err){
            console.log(err);
        }
    }

    //
    const queryClient = useQueryClient();

    const mutation = useMutation(async(inputs)=>{
    try{
       await axios.post("http://localhost:8800/api/posts",inputs,{withCredentials: true})
       }catch(err){
            setErr(err);
       }
    }, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries('posts')
    },
  })
    const descChangeHandler=(e)=>{
        setDesc(e.target.value);
    }
    const fileChangeHandler=(e)=>{
        setFile(e.target.files[0]);
        console.log(e.target.files[0])
    }
    const postHandler=async()=>{
        let imageUrl="";
        if(file) imageUrl=await upload();
        mutation.mutate({desc:desc,img:imageUrl});
        setDesc("");
        setFile(null);  
    }
    return(
            <div className={classes.postform}>
                <form > 
                    <img src={currentUser.profilePic}/>
                    <textarea  name ="desc" type="text" placeholder={`What's in Your Mind ${currentUser.name}`} value={desc} onChange={descChangeHandler}/>
                </form>

                <div className={classes.actions}>
                    <div className={classes.features}>
                        <div className={classes.feature}>
                            <input name="file" type="file" style={{display:'none'}} id="imgFile" onChange={fileChangeHandler} />
                            <label htmlFor='imgFile' >
                                <img  src={Image}  />
                                <span>Add Image</span>
                            </label>
                            
                        </div>
                        <div className={classes.feature} >
                            <img src={Map} />
                            <span>Add Place</span>
                        </div>
                        <div className={classes.feature}>
                            <img src={Friend} />
                            <span>Tag Friend</span>
                        </div>
                    </div>
                    <div className={classes.button}>
                        <Button onClick={postHandler}>Post Now!</Button>
                        
                    </div>
                </div>
            </div>
        )
}