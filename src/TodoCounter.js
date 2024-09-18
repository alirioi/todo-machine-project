import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    <>
      <h1 className="counter-title">Tareas pendientes</h1>
      <h2 className="counter-container">
        Has completado <span>{completed}</span> de <span>{total}</span>
      </h2>
    </>
  );
}

export { TodoCounter };
