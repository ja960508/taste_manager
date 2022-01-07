import React from "react";
import styles from "./main.module.css";

const Post = ({ post }) => {
  console.log(post);
  return (
    <li className={styles.post}>
      <img className={styles.post_img} src={post.url} alt='post_image' />
      <span className={styles.post_name}>{post.name}</span>
    </li>
  );
};

const Main = ({ posts }) => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <ul className={styles.post_list}>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </ul>
      </div>
    </main>
  );
};

export default Main;
