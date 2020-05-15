import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import todoReducers from "./store/reducers/todo";
import userReducers from "./store/reducers/user";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { saveState, loadState } from "./store/storeService";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistState = loadState();

const store = createStore(
  combineReducers({
    todo: todoReducers,
    user: userReducers,
  }),
  persistState,
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
