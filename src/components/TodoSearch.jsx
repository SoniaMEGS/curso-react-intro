import React from "react";
import "../style/TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
  return (
    <>
      <input
        placeholder="Search..."
        className="TodoSearch"
        // Al igualar la propiedad value con es el state, se conecta el valor del imput con el valor del estado.
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
    </>
  );
}

export { TodoSearch };
