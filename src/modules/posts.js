import { createAction, handleActions } from "redux-actions";

const GET_POST = "post/GET_POST";
const POST_POST = "post/POST_POST";

export const getPost = createAction(GET_POST);
export const postPost = createAction(POST_POST);

const initialState = {
  posts: [
    {
      id: 1,
      name: "name1",
      url: "https://via.placeholder.com/360x240",
    },
    {
      id: 2,
      name: "name2",
      url: "https://via.placeholder.com/360x240",
    },
    {
      id: 3,
      name: "name3",
      url: "https://via.placeholder.com/360x240",
    },
  ],
};

export default handleActions(
  {
    [GET_POST]: (state) => {
      return {
        ...state,
      };
    },
    [POST_POST]: (state) => {
      return {
        ...state,
      };
    },
  },
  initialState
);
