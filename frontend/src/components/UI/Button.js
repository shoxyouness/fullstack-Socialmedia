import classes from './Button.module.css'
export const Button = (props) => {
  const btnClass = `${classes.button} ${props.className}`;

  return (
    <button type={props.type} onClick={props.onClick} className={btnClass}>
      {props.children}
    </button>
  );
};
