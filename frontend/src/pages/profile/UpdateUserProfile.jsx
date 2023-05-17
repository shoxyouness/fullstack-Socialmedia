
import classes from"./UpdateUserProfile.module.css"
import Modal from "../../components/UI/Modal"
import { Input, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
const UpdateUserProfile =(props)=>{
    return(
        <Modal onClose={props.onClose}>
            <form >
               <div className={classes.left} style={{display:"flex",flexDirection:"column"}}>
                <label >
                    <span>Name</span>
                <OutlinedInput />
                </label>
                <label >
                    <span>Name</span>
                <OutlinedInput />
                </label>
                </div>
               <div className={classes.right}>

               </div>
            </form>
        </Modal>
    )
}
export default UpdateUserProfile;