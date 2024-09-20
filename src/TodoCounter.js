import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    <>
      <h1 className="counter-title">TODOs pendientes</h1>
      <h2 className="counter-container">
        Has completado <span>{completed}</span> de <span>{total}</span>
      </h2>
    </>
  );
}

export { TodoCounter };
