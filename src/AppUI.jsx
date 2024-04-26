import React from "react";
import { TodoCounter } from "./components/TodoCounter.jsx";
import { TodoSearch } from "./components/TodoSearch.jsx";
import { TodoList } from "./components/TodoList.jsx";
import { TodoItem } from "./components/TodoItem.jsx";
import TodosLoading from "./components/TodosLoading.jsx";
import TodosError from "./components/TodosError.jsx";
import EmptyTodos from "./components/EmptyTodos.jsx";
import { CreateTodoButton } from "./components/CreateTodoButton.jsx";
import { TodoContext } from "./context/TodoContext.js";

const AppUI = () => {
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

      <CreateTodoButton />
    </React.Fragment>
  );
};

export default AppUI;
