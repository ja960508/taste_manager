import React from "react";
import Button from "../commons/button/button";
import styles from "./auth_form.module.css";

const AuthForm = ({ onClick }) => {
  return (
    <div className={styles.form_block}>
      <Button onClick={onClick}>Google</Button>
      <Button onClick={onClick}>Github</Button>
    </div>
  );
};

export default AuthForm;
