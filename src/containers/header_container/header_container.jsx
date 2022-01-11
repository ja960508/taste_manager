import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Header from "../../components/header/header";
import { logout } from "../../modules/auth";
import { useNavigate } from "react-router-dom";
import { setPost } from "../../modules/posts";

const HeaderContainer = () => {
  const { user, firebase } = useSelector(({ auth }) => ({
    user: auth.user,
    firebase: auth.firebase,
  }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    firebase.logout();
    dispatch(logout());
    dispatch(setPost({}));
  };

  const onWrite = () => {
    navigate("/post");
  };

  return <Header user={user} onLogout={onLogout} onWrite={onWrite} />;
};

export default HeaderContainer;
