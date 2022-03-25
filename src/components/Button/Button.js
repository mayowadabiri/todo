import classes from './Button.module.css';

const Button = ({ children, bgColor, onclick }) => (
  <button onClick={onclick} className={`${classes.button} ${bgColor}`}>
    {children}
  </button>
);

export default Button;
