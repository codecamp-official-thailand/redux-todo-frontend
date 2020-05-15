import * as actionTypes from "../actions/actionTypes";
import jwtDecode from "jwt-decode";
import { updateState } from "../utility";

const initialState = {
  userInfo: {},
  token: null,
};

const loginUser = (state, action) => {
  const { token } = action.resData;
  const userInfo = jwtDecode(token);
  return updateState(state, { userInfo, token });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER:
      return loginUser(state, action);
    case actionTypes.LOGOUT_USER:
      return updateState(state, { userInfo: {}, token: null });
    default:
      return state;
  }
};

export default reducer;
