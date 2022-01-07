import React from "react";
import Button from "../commons/button/button";
import styles from "./header.module.css";

const Header = ({ user, onLogout }) => {
  console.log(user);
  return (
    <header className={styles.header}>
      <h1>Taste Manager</h1>
      {user ? (
        <Button onClick={onLogout}>로그아웃</Button>
      ) : (
        <Button to='/login'>로그인</Button>
      )}
    </header>
  );
};

export default Header;
