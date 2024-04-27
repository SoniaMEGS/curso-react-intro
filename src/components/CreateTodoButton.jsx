import React, { useContext } from "react";
import "../style/createTodoButton.css";
import { TodoContext } from "../context/TodoContext";

function CreateTodoButton({ setOpenModal }) {
  //const { addTodos } = useContext(TodoContext);
  return (
    <div>
      <button
        className="createTodoButton"
        onClick={() => setOpenModal((state) => !state)}
      >
        +
      </button>
    </div>
  );
}

export { CreateTodoButton };
