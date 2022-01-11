import React from "react";
import styles from "./main.module.css";

const Post = ({ handleClick, post, id }) => {
  return (
    <li onClick={() => handleClick(id)} className={styles.post}>
      <img className={styles.post_img} src={post.url} alt='post_image' />
      <span className={styles.post_name}>{post.title}</span>
    </li>
  );
};

const Main = ({ posts, handleClick }) => {
  console.log(posts);
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <ul className={styles.post_list}>
          {Object.keys(posts).map((postId) => {
            return (
              <Post
                handleClick={handleClick}
                key={postId}
                post={posts[postId]}
                id={postId}
              />
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Main;
