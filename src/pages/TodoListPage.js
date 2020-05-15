import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions";

function TodoListPage(props) {
  useEffect(() => {
    props.fetchTodos(props.token);
  }, [props.token]);

  return (
    <div>
      {props.todos.map(todo => (
        <li>
          {todo.topic}:{todo.description}
        </li>
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.todo.todoList,
    token: state.user.token,
  };
};

const dispatchToProps = dispatch => {
  return {
    fetchTodos: token => dispatch(actionCreators.fetchTodo(token)),
  };
};

export default connect(mapStateToProps, dispatchToProps)(TodoListPage);
