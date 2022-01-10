import React from "react";
import { useSelector } from "react-redux";
import Post from "../../components/post/post";

const PostContainer = () => {
  const cloudinary = useSelector(({ posts }) => {
    return posts.cloudinary;
  });

  const onSubmit = async (e, title, desc, file) => {
    e.preventDefault();
    const image = file[0];
    console.log(title, desc);
    const text = await cloudinary.uploadImage(image);

    console.log(text);
  };

  return <Post onSubmit={onSubmit} />;
};

export default PostContainer;
