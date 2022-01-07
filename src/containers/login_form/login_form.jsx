import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthForm from "../../components/auth_form/auth_form";
import { login } from "../../modules/auth";

const LoginForm = () => {
  const { firebase } = useSelector(({ auth }) => ({
    firebase: auth.firebase,
  }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClick = async (e) => {
    const type = e.target.innerText;

    const user = await firebase.login(type);
    dispatch(login(user));
    navigate("/");
  };

  return <AuthForm onClick={onClick} />;
};

export default LoginForm;
