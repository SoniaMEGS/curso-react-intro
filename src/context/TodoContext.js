import React from "react";
import useLocalStorage from "../customHook/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  //Nota: los estados en react son imutables, por lo que se necesita una funcion que actualice el estado.
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage(`TODOS_V1`, []);
  const [searchValue, setSearchValue] = React.useState(``);
  const [openModal, setOpenModal] = React.useState(true);

  //↓Devuelve la cantidad de tareas marcadas como completadas
  const completedTodos = todos.filter((todo) => todo.completed).length;

  //↓Devuelve todas las tareas existentes
  const totalTodos = todos.length;

  //↓Devuelve una lista de tareas que contengan lo que se pasa por search.
  const searchedTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase())
  );

  //↓Actualiza el valor de completed al contrario de su valor actual, para marcar como terminada o no una tarea
  const completeTodos = (key) => {
    //↓Crea una copia del estado.
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === key);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  //↓Elimina un elemento de la lista de tareas.
  const deleteTodos = (key) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === key);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  //↓Add todos
  const addTodos = () => {
    const newTodos = [...todos];
    newTodos.push({ text: "Estudiar", completed: false });
    saveTodos(newTodos);
  };

  //↓ Open modal
  //const openModal = () => {};

  return (
    <TodoContext.Provider
      value={{
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodos,
        deleteTodos,
        addTodos,
        loading,
        error,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
