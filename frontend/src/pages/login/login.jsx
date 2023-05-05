import React, { useContext, useState } from "react";
import classes from "./login.module.css"
import Input from "../../components/UI/Input";
import { Button } from "../../components/UI/Button";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Login=()=>{
  const {login}=useContext(AuthContext);
  const [err,setErr]=useState(null);
  const navigate=useNavigate();

  const[inputs,setInputs]=useState({
    username:"",
    password:"",
  })

  const changeHandler=(e)=>{
    setInputs((prev)=>({...prev , [e.target.name]:e.target.value}));
  }

   const loginHandler= async(e)=>{
    e.preventDefault();
    try{ 
      await login(inputs);
      navigate("/");
    }catch(err){
      console.log(err);
      setErr(err.response.data);
    }
   
   }
    return(
    <div className={classes.loginContainer}>
    <div className={classes.login}>
        <div className={classes.leftSide}>
                  <h1>Hello To My Chat!</h1>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus atque nihil adipisci consectetur unde doloribus illo aliquam impedit, sint, vitae debitis. Exercitationem obcaecati cumque beatae repellat iusto blanditiis fugit libero!</p>
                  <span>You Don't have an Account?</span>
                  <Link to="/register"><Button>Register</Button></Link>
        </div>
    <div className={classes.rightSide}>
    <h1>Login</h1>
      <form onSubmit={loginHandler}>
        <Input  name="username" type="text" onChange={changeHandler} placeholder="username" /> 
        <Input type="password" name="password" onChange={changeHandler}  placeholder="password" />
        <Button type="submit">Login</Button>
      </form>
      {err && err}
    </div>
    </div>
    </div>
    )
}
export default Login;