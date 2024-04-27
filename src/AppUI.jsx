import React, { useContext, useEffect } from "react";
import { TodoCounter } from "./components/TodoCounter.jsx";
import { TodoSearch } from "./components/TodoSearch.jsx";
import { TodoList } from "./components/TodoList.jsx";
import { TodoItem } from "./components/TodoItem.jsx";
import TodosLoading from "./components/TodosLoading.jsx";
import TodosError from "./components/TodosError.jsx";
import EmptyTodos from "./components/EmptyTodos.jsx";
import Modal from "./components/Modal.jsx";
import TodoForm from "./components/TodoForm.jsx";
import { CreateTodoButton } from "./components/CreateTodoButton.jsx";
import { TodoContext } from "./context/TodoContext.js";

const AppUI = () => {
  const { openModal, setOpenModal } = useContext(TodoContext);
  useEffect(() => {
    console.log(openModal);
  }, []);
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoContext.Consumer>
        {({ searchedTodos, completeTodos, deleteTodos, loading, error }) => (
          <TodoList>
            {loading && (
              <>
                <TodosLoading />
                <TodosLoading />
                <TodosLoading />
              </>
            )}
            {error && <TodosError />}
            {!loading && searchedTodos.length === 0 && <EmptyTodos />}
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
        )}
      </TodoContext.Consumer>

      <CreateTodoButton setOpenModal={setOpenModal} />

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </React.Fragment>
  );
};

export default AppUI;
