import React from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import TodoListPage from "./pages/TodoListPage";

function App() {
  return (
    <div className="App">
      <LoginPage />
      <TodoListPage />
    </div>
  );
}

export default App;
