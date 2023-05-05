
import classes from './Stories.module.css'
//Tempory data
const dummy_Stories=[
    {id:1,
    name:"Younes",
    img:"https://images.pexels.com/photos/2820592/pexels-photo-2820592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {id:2,
    name:"Younes",
    img:"https://images.pexels.com/photos/2820592/pexels-photo-2820592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {id:3,
    name:"Younes",
    img:"https://images.pexels.com/photos/2820592/pexels-photo-2820592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {id:4,
    name:"Younes",
    img:"https://images.pexels.com/photos/2820592/pexels-photo-2820592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
   
    
]

const Stories=()=>{


    return(
        <div className={classes.stories}>
         
                <div className={classes.storie}>
                    <img src="https://images.pexels.com/photos/2820592/pexels-photo-2820592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                    <button>+</button>
                    <span>user</span>
                </div>
        
            {dummy_Stories.map(storie=>{
                return(
                <div className={classes.storie}>
                    <img src={storie.img}/>
                    <span>{storie.name}</span>
                </div>)
            })}
        </div>
    )
}
export default Stories;