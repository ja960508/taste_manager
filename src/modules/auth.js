import { createAction, handleActions } from "redux-actions";
import Firebase from "./firebase";

const LOGIN = "auth/LOGIN";
const LOGOUT = "auth/LOGOUT";

export const login = createAction(LOGIN);
export const logout = createAction(LOGOUT);

const initialState = {
  user: null,
  firebase: new Firebase(),
};

export default handleActions(
  {
    [LOGIN]: (state, { payload: user }) => {
      return {
        ...state,
        user: user,
      };
    },
    [LOGOUT]: (state) => ({
      ...state,
      user: null,
    }),
  },
  initialState
);
