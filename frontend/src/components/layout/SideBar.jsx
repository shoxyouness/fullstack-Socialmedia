
import classes from './SideBar.module.css'
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
const SideBar=()=>{
    const {currentUser}=useContext(AuthContext);
    return(
        <div className={classes.sidebar}>
           
            <div className={classes.items}>
                <div className={classes.user}>
                <img src={currentUser.profilePic} />
                <span>Your Profile</span>
                </div>
                <div className={classes.item}>
                    <img src={Friends} />
                    <span>Friends</span>
                </div>
                <div className={classes.item}>
                    <img src={Groups} />
                    <span>Groups</span>
                </div>
                <div className={classes.item}>
                    <img src={Market} />
                    <span>Market</span>
                </div>
                <div className={classes.item}>
                    <img src={Watch} />
                    <span>Watch</span>
                </div>
            </div>
            <div className={classes.items}>
                <div className={classes.item}>
                    <img src={Memories} />
                    <span>Memories</span>
                </div>
                <div className={classes.item}>
                    <img src={Events} />
                    <span>Events</span>
                </div>
                <div className={classes.item}>
                    <img src={Gaming} />
                    <span>Gaming</span>
                </div>
                <div className={classes.item}>
                    <img src={Gallery} />
                    <span>Gallery</span>
                </div>
            </div>
            <div className={classes.items}>
                <div className={classes.item}>
                    <img src={Videos} />
                    <span>Videos</span>
                </div>
                <div className={classes.item}>
                    <img src={Messages} />
                    <span>Messages</span>
                </div>
                <div className={classes.item}>
                    <img src={Tutorials} />
                    <span>Tutorials</span>
                </div>
                <div className={classes.item}>
                    <img src={Courses} />
                    <span>Courses</span>
                </div>
                
                <div className={classes.item}>
                    <img src={Fund} />
                    <span>Fund</span>
                </div>
                </div>
        </div>
        
    )
}

export default SideBar;