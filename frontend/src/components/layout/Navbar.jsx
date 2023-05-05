
import classes from './Navbar.module.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';
import AppsIcon from '@mui/icons-material/Apps';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';



const NavBar=()=>{
    const {currentUser}=useContext(AuthContext);

    return(
        <div className={classes.navbar} >
            <div className={classes.leftSide}>
                <span>LOGO</span> 
                <HomeOutlinedIcon/>
                <Brightness4OutlinedIcon/>
                <AppsIcon/>
                <div className={classes.search}>
                    <SearchIcon />
                    <input type="text"/>
                </div>
            </div>
            <div className={classes.rightSide}>
                <EmailOutlinedIcon/>
                <NotificationsNoneOutlinedIcon/>
                <PersonOutlineOutlinedIcon/>
                <div className={classes.user}>
                    <img src={currentUser.profilePic} />
                    <span>{currentUser.name}</span>
                </div>

            </div>
        </div>
    )
}

export default NavBar;