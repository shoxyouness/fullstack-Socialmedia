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
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Profile=()=>{
    const {currentUser}=useContext(AuthContext);


    return(
     
        <div className={classes.home}>
            <NavBar />
            <div className={classes.main}>
                <SideBar />
                <div className={classes.profile}>
                    <div className={classes.background}>
                        <img src={currentUser.coverPic} />
                    </div>
                    <div className={classes.uinfo}>
                    <div className={classes.info}>
                    <img src={currentUser.profilePic} className={classes.imgprofile} />
                    <div className={classes.user}>
                        <span>{currentUser.name}</span>
                        <div>
                            <Button>Follow</Button>
                            <Button>message</Button>
                        </div>
                    </div>
                    </div>
                    
                    <div className={classes.status}>
                        <Posts/>
                    </div>
                  
                </div>
               
                </div>
            </div>
          
        </div>
    )
}
export default Profile;