import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return completed < total ? (
    <h2 className="todoCounter">
      Has completado <span>{completed}</span> de <span>{total}</span>
    </h2>
  ) : (
    <h2 className="todoCounter">
      ¡Felicidades, has completado todas tus tareas! 🎉
    </h2>
  );
}

export { TodoCounter };
