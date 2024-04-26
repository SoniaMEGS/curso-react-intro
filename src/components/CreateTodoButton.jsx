import React from "react";
import "../style/createTodoButton.css";

function CreateTodoButton({ addTodos }) {
  return (
    <div>
      <button className="createTodoButton" onClick={() => addTodos()}>
        +
      </button>
    </div>
  );
}

export { CreateTodoButton };
