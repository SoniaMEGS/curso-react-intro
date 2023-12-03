//import React from "react";
import { TodoCounter } from "./components/TodoCounter.jsx";
import { TodoSearch } from "./components/TodoSearch.jsx";
import { TodoList } from "./components/TodoList.jsx";
import { TodoItem } from "./components/TodoItem.jsx";
import { CreateTodoButton } from "./components/CreateTodoButton.jsx";
import "./App.css";
import React from "react";

const defaultTodos = [
  { text: "Acariciar gatitos", completed: false },
  { text: "Comer una mandarina", completed: false },
  { text: "Jugar al Linko", completed: true },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter total={16} completed={5} />
      <TodoSearch />
      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
