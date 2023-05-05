

import classes from "./Comments.module.css"
const dummy_comment=[{
    id:1,
    name:"Younes Mhadhbi",
    userId:1,
    description:"Isma3 Sidek Isma3 SidekIsma3 SidekIsma3 Isma3 SidekIsma3 SidekIsma3 SidekIsma3 SidekIsma3 Sidek SidekIsma3 SidekIsma3 SidekIsma3 SidekIsma3 Sidek" ,
    profilePic:"https://images.pexels.com/photos/15040937/pexels-photo-15040937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},
{
    id:2,
    name:"Khalil Mrabet",
    userId:2,
    description:"Isma3 Sidek" ,
    profilePic:"https://images.pexels.com/photos/15040937/pexels-photo-15040937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},]
const Comments=()=>{
    return(
    <div className={classes.comments}>
        <form>
            <img src="https://images.pexels.com/photos/8122018/pexels-photo-8122018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            <input type="text"  placeholder="Comments..."/>
            <button>Comment</button>
        </form>
        {dummy_comment.map(comment=>{
            return(
                <div className={classes.comment}>
                    <img src={comment.profilePic}/>
                    <div className={classes.info}>
                        <span>{comment.name}</span>
                        <p>{comment.description}</p>
                    </div> 
                    <span className={classes.date}>1 min Ago</span>
                </div>
            )
        })}
    </div>
    )
}
export default Comments;