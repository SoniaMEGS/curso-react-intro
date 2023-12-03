import React from "react";
import "../style/todoCounter.css";

function TodoCounter({ total, completed }) {
  console.log(total, completed);
  return (
    <div>
      <h1 className="TodoCounter">
        Haz completado {completed} de {total} TODO
      </h1>
    </div>
  );
}

export { TodoCounter };
