import Content from "../../components/Content/Content"
import Stories from "../../components/Content/Stories"
import NavBar from "../../components/layout/Navbar"
import RightBar from "../../components/layout/RightBar"
import SideBar from "../../components/layout/SideBar"
import classes from './Home.module.css'
const Home =()=>{

    return(
        <div className={classes.home}>
            <NavBar />
            <div className={classes.main}>
            <SideBar />
            <Content/>
            <RightBar/>
            </div>

        </div>
    )
}
export default Home;