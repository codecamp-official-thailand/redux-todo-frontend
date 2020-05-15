import axios from "../../config/axios";
import * as actionTypes from "./actionTypes";

const readTodo = todos => {
  return {
    type: actionTypes.FECTH_TODOS,
    todos: todos,
  };
};

export const fetchTodo = token => {
  console.log(token);
  return dispatch => {
    axios
      .get("/todos", { headers: { Authorization: `Bearer ${token}` } })
      .then(result => {
        dispatch(readTodo(result.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const clearTodo = () => {
  return {
    type: actionTypes.CLEAR_TODOS,
  };
};
