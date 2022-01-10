import React, { useRef } from "react";
import styles from "./post.module.css";

const Post = ({ onSubmit }) => {
  const titleRef = useRef();
  const descRef = useRef();
  const fileRef = useRef();

  return (
    <form
      onSubmit={(e) =>
        onSubmit(
          e,
          titleRef.current.value,
          descRef.current.value,
          fileRef.current.files
        )
      }
      className={styles.form}
    >
      <input
        name='post_title'
        placeholder='제목을 입력하세요...'
        ref={titleRef}
      />
      <textarea
        name='post_description'
        placeholder='내용을 입력하세요...'
        ref={descRef}
      />
      <input type='file' id='file_upload' ref={fileRef} />
      <button type='submit'>글쓰기</button>
    </form>
  );
};

export default Post;
