import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import "../style/todoCounter.css";

function TodoCounter() {
  const { completedTodos, totalTodos } = useContext(TodoContext);
  //console.log(total, completed);
  return totalTodos === completedTodos ? (
    <h1 className="TodoCounter">Has completado todos tus TODOS 🥳</h1>
  ) : (
    <h1 className="TodoCounter">
      Haz completado {completedTodos} de {totalTodos} TODO
    </h1>
  );
}

export { TodoCounter };
