import React from "react";
import "../style/createTodoButton.css";

function CreateTodoButton() {
  return (
    <div>
      <button
        className="createTodoButton"
        onClick={() => console.log(`Le diste click`)}
      >
        +
      </button>
    </div>
  );
}

export { CreateTodoButton };
