import React from "react";
import "../style/todoList.css";

function TodoList({ children }) {
  //console.log(children);
  return (
    <div>
      <ul>{children}</ul>
    </div>
  );
}

export { TodoList };
