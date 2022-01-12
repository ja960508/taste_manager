import React, { useRef, useState } from "react";
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
  const [currentSlide, setCurrentSlide] = useState(1);
  const slideRef = useRef();
  const slideMax = Math.ceil(Object.keys(posts).length / 3)
    ? Math.ceil(Object.keys(posts).length / 3)
    : 1;
  console.log(slideMax, currentSlide);

  const nextClick = () => {
    setCurrentSlide(currentSlide + 1);
  };

  const prevClick = () => {
    setCurrentSlide(currentSlide - 1);
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <ul
          className={styles.post_list}
          ref={slideRef}
          style={{
            transform: `translateX(-${(currentSlide - 1) * 1024}px)`,
            transition: `transform 0.25s ease-in`,
          }}
        >
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
      {currentSlide !== 1 && (
        <button onClick={() => prevClick()} className={styles.prev}>
          prev
        </button>
      )}

      {currentSlide !== slideMax && (
        <button onClick={() => nextClick()} className={styles.next}>
          next
        </button>
      )}
    </main>
  );
};

export default Main;
