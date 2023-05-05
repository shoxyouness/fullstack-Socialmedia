
import classes from './Rightbar.module.css'

const RightBar=()=>{
    return(
        <div className={classes.rightbar}>
            <div className={classes.items}>
                <h4 >Suggestions For You!</h4>
                  <div className={classes.suggestions}>
                    <div className={classes.info}>
                    <img src="https://images.pexels.com/photos/8638606/pexels-photo-8638606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <span>Saif eddine</span>
                    </div>
                    <div className={classes.actions}>
                    <button>Follow</button>
                    <button>Dismiss</button>
                    </div>
                </div>
                 <div className={classes.suggestions}>
                    <div className={classes.info} >
                    <img src="https://images.pexels.com/photos/8638606/pexels-photo-8638606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <span>Saif eddine</span>
                    </div>
                    <div className={classes.actions}>
                    <button>Follow</button>
                    <button>Dismiss</button>
                    </div>
                </div>
                <div className={classes.suggestions}>
                    <div className={classes.info} >
                    <img src="https://images.pexels.com/photos/8638606/pexels-photo-8638606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <span>Saif eddine</span>
                    </div>
                    <div className={classes.actions}>
                    <button>Follow</button>
                    <button>Dismiss</button>
                    </div>
                </div>
                <div className={classes.suggestions}>
                    <div className={classes.info}>
                    <img src="https://images.pexels.com/photos/8638606/pexels-photo-8638606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <span>Saif eddine</span>
                    </div>
                    <div className={classes.actions}>
                    <button>Follow</button>
                    <button>Dismiss</button>
                    </div>
                </div>
            </div>
            <div className={classes.items}>
                <h4>Latest Activities</h4>
                <div className={classes.activities}>
                    <div className={classes.info}>
                    <img src="https://images.pexels.com/photos/8638606/pexels-photo-8638606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <span>Saif eddine</span>
                    </div>
                    <div className={classes.actions}>
                    <p>Liked your Post</p>
                    </div>
                    
                </div>
              
            </div>
            <div className={classes.items}>
                <h4>Online Friends</h4>
                <div className={classes.info}>
                    <img src="https://images.pexels.com/photos/8638606/pexels-photo-8638606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <span>Saif eddine</span>
                </div>
                <div className={classes.info}>
                    <img src="https://images.pexels.com/photos/8638606/pexels-photo-8638606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <span>Saif eddine</span>
                </div>
                 <div className={classes.info}>
                    
                    <img src="https://images.pexels.com/photos/8638606/pexels-photo-8638606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <span>Saif eddine</span>
                </div>
            </div>


        </div>
    )
}

export default RightBar;