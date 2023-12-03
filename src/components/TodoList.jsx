import React from "react";
import "../style/todoList.css";

function TodoList({ children }) {
  return (
    <div>
      <ul>{children}</ul>
    </div>
  );
}

export { TodoList };
