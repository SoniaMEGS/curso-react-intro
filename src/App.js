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
  { text: "Comer dulces", completed: false },
  { text: "Comprar velas", completed: true },
];

function App() {
  //Nota: los estados en react son imutables, por lo que se necesita una funcion que actualice el estado.
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState(``);
  //console.log(`Los usuarios buscan TODOs de ${searchValue}`);

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase())
  );
  const completeTodos = (key) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === key);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  };
  const deleteTodos = (key) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === key);
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <React.Fragment>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodos(todo.text)}
            onDelete={() => deleteTodos(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
