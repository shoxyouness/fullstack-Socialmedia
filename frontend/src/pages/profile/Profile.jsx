import NavBar from '../../components/layout/Navbar';
import SideBar from '../../components/layout/SideBar';
import classes from './Profile.module.css'
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RightBar from '../../components/layout/RightBar';
import Posts from '../../components/Content/post/Posts';
import { Button } from '../../components/UI/Button';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import {useQuery,useQueryClient,useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useLocation } from 'react-router-dom';
import UpdateUserProfile from "./UpdateUserProfile"
const Profile=()=>{
    const {currentUser}=useContext(AuthContext);
    const userId=useLocation().pathname.split("/")[2];
    const [profileInfos,setProfileInfos]=useState({});
    const [updateClicked,setUpdateClicked]=useState(false);
    const { isLoading, error, data } = useQuery(["user"], () =>
    axios.get(`http://localhost:8800/api/users/find/${userId}`).then((res) => {
      return res.data;
    })
    );
     const { isLoading:relationIsloading, error:err, data:relation } = useQuery(["relation"], () =>
    axios.get(`http://localhost:8800/api/relation?userId=${userId}`,{withCredentials:true}).then((res) => {
      return res.data;
    })
    );
    const queryClient = useQueryClient();
    const mutation = useMutation(
    async(followed)=>{
        if(followed)
            await axios.delete(`http://localhost:8800/api/relation?userId=${userId}`,{withCredentials: true})
        else
            await axios.post("http://localhost:8800/api/relation",{userId:userId},{withCredentials: true})

    }, {
    onSuccess: () => { 
      // Invalidate and refetch
      queryClient.invalidateQueries("relation")
    },
  })
    
    const updateHandler=()=>{
        setUpdateClicked(true);
    }
    const closeHandler=()=>{
        setUpdateClicked(false);
    }
    const followHandler=async()=>{
        mutation.mutate(relation.includes(currentUser.id));
    }
    return(
     
        <div className={classes.home}>
            <NavBar />
            <div className={classes.main}>
                <SideBar />
                <div className={classes.profile}>
                    <div className={classes.background}>
                        <img src={profileInfos.coverPic} />
                    </div>
                    <div className={classes.uinfo}>
                    <div className={classes.info}>
                    <img src={profileInfos.profilePic} className={classes.imgprofile} />
                    <div className={classes.user}>
                        <span>{profileInfos.name}</span>
                       { currentUser.id==userId ? <div><Button onClick={updateHandler}>Update</Button></div> :
                       <div>
                            <Button onClick={followHandler}>{relationIsloading ? "Loading...":relation.includes(currentUser.id)? "following" :"follow" }</Button>
                            <Button>message</Button>
                        </div>}
                        {updateClicked && <UpdateUserProfile onClose={closeHandler} />}
                         
                    </div>
                 
                    </div>
                    
                    <div className={classes.status}>
                        <Posts userId={userId} />
                    </div>
                  
                </div>
               
                </div>
            </div>
          
        </div>
    )
}
export default Profile;