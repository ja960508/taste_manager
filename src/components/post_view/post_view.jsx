import React from "react";
import styles from "./post_view.module.css";

const PostView = ({ view }) => {
  console.log(view);
  return (
    <div className={styles.view}>
      <img src={view.url} alt='img' />
      <span className={styles.title}>{view.title}</span>
      <span className={styles.desc}>{view.desc}</span>
    </div>
  );
};

export default PostView;
