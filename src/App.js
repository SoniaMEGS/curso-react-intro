import React from "react";
import "./App.css";
import AppUI from "./AppUI.jsx";
import useLocalStorage from "./customHook/useLocalStorage.jsx";
import { TodoProvider } from "./context/TodoContext.js";

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
