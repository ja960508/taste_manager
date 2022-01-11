import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Main from "../../components/main/main";
import { setPost } from "../../modules/posts";

const MainContainer = () => {
  const { posts, firebase, user } = useSelector(({ posts, auth }) => ({
    posts: posts.posts,
    firebase: auth.firebase,
    user: auth.user,
  }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (id) => {
    if (!user) {
      alert("로그인 먼저 해");

      return;
    }
    navigate(`/${user}/${id}`);
  };

  useEffect(() => {
    if (user) {
      const getData = async (user) => {
        const result = await firebase.setData(user);
        dispatch(setPost(result));

        return result;
      };

      getData(user);
    }
  }, [user, firebase, dispatch]);

  return <Main posts={posts} handleClick={handleClick} />;
};

export default MainContainer;
