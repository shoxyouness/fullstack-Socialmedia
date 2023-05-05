import classes from './Content.module.css'
import { PostForm } from './PostForm';
import Stories from './Stories';
import Posts from './post/Posts';
const Content=()=>{
    return(
        <div className={classes.content}>
            <Stories/>
            <PostForm />
            <Posts/>
        </div>
    )
}
export default Content;