import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';
import { BiSearch } from 'react-icons/bi';

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  return (
    <div className="TodoSearch-container">
      <BiSearch className="TodoSearch-icon" />
      <input
        placeholder="Busca una tarea pendiente"
        className="TodoSearch-input"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
    </div>
  );
}

export { TodoSearch };
