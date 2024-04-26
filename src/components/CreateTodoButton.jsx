import React, { useContext } from "react";
import "../style/createTodoButton.css";
import { TodoContext } from "../context/TodoContext";

function CreateTodoButton() {
  const { addTodos } = useContext(TodoContext);
  return (
    <div>
      <button className="createTodoButton" onClick={() => addTodos()}>
        +
      </button>
    </div>
  );
}

export { CreateTodoButton };
