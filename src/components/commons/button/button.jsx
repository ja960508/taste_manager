import React from "react";
import { Link } from "react-router-dom";
import styles from "./button.module.css";

const Button = (props) => {
  return props.to ? (
    <Link to={props.to} className={styles.button}>
      {props.children}
    </Link>
  ) : (
    <button onClick={props.onClick} className={styles.button}>
      {props.children}
    </button>
  );
};

export default Button;
