import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Header from "../../components/header/header";
import { logout } from "../../modules/auth";

const HeaderContainer = () => {
  const { user, firebase } = useSelector(({ auth }) => ({
    user: auth.user,
    firebase: auth.firebase,
  }));
  const dispatch = useDispatch();

  const onLogout = () => {
    firebase.logout();
    dispatch(logout());
  };

  return <Header user={user} onLogout={onLogout} />;
};

export default HeaderContainer;
