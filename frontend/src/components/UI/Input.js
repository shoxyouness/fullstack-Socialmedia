import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
 
     
      <input className={classes.input}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
        ref={ref}
        id={props.id}
        name={props.name}
      />
  );
});
export default Input;
