import * as actionTypes from "../actions/actionTypes";
import { updateState } from "../utility";

const initialState = {
  todoList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FECTH_TODOS:
      return updateState(state, { todoList: action.todos });
    case actionTypes.CLEAR_TODOS:
      return updateState(state, { todoList: [] });
    default:
      return state;
  }
};

export default reducer;
