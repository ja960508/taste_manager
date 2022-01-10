import React from "react";
import { useSelector } from "react-redux";
import Main from "../../components/main/main";

const MainContainer = () => {
  const { posts } = useSelector(({ posts }) => ({
    posts: posts.posts,
  }));

  const handleClick = (id) => {
    console.log(id);
  };

  return <Main posts={posts} handleClick={handleClick} />;
};

export default MainContainer;
