import React from "react";
import styles from "./main.module.css";

const Post = ({ post, handleClick }) => {
  console.log(post);
  return (
    <li onClick={() => handleClick(post.id)} className={styles.post}>
      <img className={styles.post_img} src={post.url} alt='post_image' />
      <span className={styles.post_name}>{post.name}</span>
    </li>
  );
};

const Main = ({ posts, handleClick }) => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <ul className={styles.post_list}>
          {posts.map((post) => {
            return <Post handleClick={handleClick} key={post.id} post={post} />;
          })}
        </ul>
      </div>
    </main>
  );
};

export default Main;
