
import classes from './Register.module.css'
import Input from '../../components/UI/Input'
import { Button } from '../../components/UI/Button'
import { Link, useAsyncError } from 'react-router-dom'
import { useState } from 'react'
import axios from "axios"
const Register=()=>{
  const [inputs, setInputs]=useState({
    username:"",
    email:"",
    password:"",
    name:"",
  });
  const [err,setErr]=useState(null);
  const changeHandler=(e)=>{
    console.log(e.target.name)
    setInputs(prev=>({...prev,[e.target.name]:e.target.value}));
   
  }
   console.log(inputs);
  const submitHandler=async(e)=>{
    e.preventDefault();
    try{
    await axios.post("http://localhost:8800/api/auth/register",inputs);
    }catch(err){

      setErr(err.response.data);
    }
  }
    return(
        
    <div className={classes.registerContainer}>
    <div className={classes.register}>
    <div className={classes.leftSide}>
    <h1>Register</h1>
      <form onSubmit={submitHandler}>
        <Input id="text" name="name" type="text" placeholder="Name" onChange={changeHandler} /> 
        <Input id="text" name="username" type="text" placeholder="Username" onChange={changeHandler}   />
        <Input id="email" name="email" type="text" placeholder="email@email.com" onChange={changeHandler} /> 
        <Input type="password" name="password" placeholder="password" onChange={changeHandler}  />
        <Button type="submit">Register</Button>
      </form>
     {err && err} 
    </div>
     <div className={classes.rightSide}>
        <h1>Hello To My Chat!</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus atque nihil adipisci consectetur unde doloribus illo aliquam impedit, sint, vitae debitis. Exercitationem obcaecati cumque beatae repellat iusto blanditiis fugit libero!</p>
        <span>You have an Account?</span>
        <Link to="/login"><Button>Login Now!</Button></Link>
        
    </div>
    </div>
    </div>
    )
}
export default Register