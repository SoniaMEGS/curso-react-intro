import React from "react";
import "../style/todoCounter.css";

function TodoCounter({ total, completed }) {
  //console.log(total, completed);
  return total === completed ? (
    <h1 className="TodoCounter">Has completado todos tus TODOS 🥳</h1>
  ) : (
    <h1 className="TodoCounter">
      Haz completado {completed} de {total} TODO
    </h1>
  );
}

export { TodoCounter };
