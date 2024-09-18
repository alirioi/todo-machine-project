import './TodoSearch.css';
import searchIcon from './assets/icons/search.svg';

function TodoSearch() {
  return (
    <div className="search-container">
      <img src={searchIcon} alt="search" className="search-icon" />
      <input placeholder="Busca una tarea pendiente" className="search-input" />
    </div>
  );
}

export { TodoSearch };
