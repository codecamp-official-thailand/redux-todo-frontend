import * as actionTypes from "./actionTypes";
import axios from "../../config/axios";

const login = (resData) => {
  return {
    type: actionTypes.LOGIN_USER,
    resData,
  };
};

export const onLogin = (username, password) => {
  return (dispatch) => {
    console.log({ username, password });
    axios
      .post("/users/login", { username, password })
      .then((result) => {
        dispatch(login(result.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const onLogout = () => {
  return {
    type: actionTypes.LOGOUT_USER,
  };
};
