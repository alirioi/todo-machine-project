import React from 'react';
import './TodoSearch.css';
import searchIcon from './assets/icons/search.svg';

function TodoSearch({ searchValue, setSearchValue }) {
  return (
    <div className="search-container">
      <img src={searchIcon} alt="search" className="search-icon" />
      <input
        placeholder="Busca una tarea pendiente"
        className="search-input"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
    </div>
  );
}

export { TodoSearch };
