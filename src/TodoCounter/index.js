import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);

  if (totalTodos === 0) {
    return <h2 className="todoCounter">¡Crea tu primer TODO!</h2>;
  }

  return completedTodos < totalTodos ? (
    <h2 className="todoCounter">
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span>
    </h2>
  ) : (
    <h2 className="todoCounter">
      ¡Felicidades, has completado todas tus tareas! 🎉
    </h2>
  );
}

export { TodoCounter };
