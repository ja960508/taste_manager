import { createAction, handleActions } from "redux-actions";
import Cloudinary from "./cloudinary";

const SET_POST = "post/SET_POST";
const SET_VIEW = "post/SET_VIEW";

export const setPost = createAction(SET_POST);
export const setView = createAction(SET_VIEW);

const initialState = {
  cloudinary: new Cloudinary(),
  posts: {
    1641896980: {
      desc: "제철입니다",
      title: "제철",
      url: "http://res.cloudinary.com/dcljapgr4/image/upload/v1641896980/hg0rjz2illewb2are595.jpg",
    },
    1641897076: {
      desc: "맛있어!",
      title: "맛있다",
      url: "http://res.cloudinary.com/dcljapgr4/image/upload/v1641897076/gihyg3vf1vtgppghriri.jpg",
    },
    1641897193: {
      desc: ":)",
      title: "하",
      url: "http://res.cloudinary.com/dcljapgr4/image/upload/v1641897193/d6ydee3cvcu4rlxgbzoo.jpg",
    },
  },
  view: {},
};

export default handleActions(
  {
    [SET_POST]: (state, { payload: posts }) => {
      return {
        ...state,
        posts: posts,
      };
    },
    [SET_VIEW]: (state, { payload: view }) => {
      return {
        ...state,
        view: view,
      };
    },
  },
  initialState
);
