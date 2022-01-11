import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PostView from "../../components/post_view/post_view";
import { setView } from "../../modules/posts";

const PostViewContainer = () => {
  const params = useParams();
  const { userId, postId } = params;
  const { firebase, view } = useSelector(({ auth, posts }) => ({
    firebase: auth.firebase,
    view: posts.view,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    const selectData = async () => {
      const post = await firebase.selectData(userId, postId);
      console.log(post);
      dispatch(setView(post));

      return post;
    };

    selectData();

    return () => {
      dispatch(setView({}));
    };
  }, [firebase, userId, postId, dispatch]);

  return <PostView view={view} />;
};

export default PostViewContainer;
