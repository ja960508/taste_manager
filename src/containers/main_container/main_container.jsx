import React from "react";
import { useSelector } from "react-redux";
import Main from "../../components/main/main";

const MainContainer = () => {
  const { posts } = useSelector(({ posts }) => ({
    posts: posts.posts,
  }));

  return <Main posts={posts} />;
};

export default MainContainer;
