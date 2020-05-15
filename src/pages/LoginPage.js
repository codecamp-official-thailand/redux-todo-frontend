import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions/index";
import "./LoginPage.css";

function LoginPage(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function renderPage() {
    if (props.user.name) {
      return (
        <>
          ยินดีต้อนรับคุณ {props.user.name}{" "}
          <button
            onClick={() => {
              props.onLogout();
              props.clearTodo();
            }}
          >
            Logout
          </button>
        </>
      );
    } else {
      return (
        <>
          <div>
            <label>Username</label>
            <input type='text' value={username} onChange={e => setUsername(e.target.value)} />
          </div>
          <div>
            <label>Password</label>
            <input type='text' value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <button
            onClick={() => {
              props.onLogin(username, password);
            }}
          >
            Login
          </button>
        </>
      );
    }
  }

  return <div className='login-panel'>{renderPage()}</div>;
}

const mapStateToProps = state => {
  return {
    user: state.user.userInfo,
    token: state.user.token,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (username, password) => dispatch(actionCreators.onLogin(username, password)),
    onLogout: () => dispatch(actionCreators.onLogout()),
    clearTodo: () => dispatch(actionCreators.clearTodo()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
