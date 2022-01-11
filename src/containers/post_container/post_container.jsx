import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Post from "../../components/post/post";

const PostContainer = () => {
  const { cloudinary, firebase, user } = useSelector(({ posts, auth }) => ({
    user: auth.user,
    cloudinary: posts.cloudinary,
    firebase: auth.firebase,
  }));
  const navigate = useNavigate();

  const onSubmit = async (e, title, desc, file) => {
    e.preventDefault();

    if (!user) {
      console.log("no user");
      navigate("/");
    }

    const image = file[0];
    console.log(title, desc);
    const url = await cloudinary.uploadImage(image);
    const timestamp = Math.floor(Date.now() / 1000);
    const postObj = {
      title: title,
      desc: desc,
      url: url,
    };
    await firebase.write(user, postObj, timestamp);
    navigate("/");
  };

  return <Post onSubmit={onSubmit} />;
};

export default PostContainer;
