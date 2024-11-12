import React from 'react';
import { TodoContext } from '../TodoContext';

function EmptyTodos() {
  const { todos } = React.useContext(TodoContext);
  return todos.length === 0 ? (
    <p>No haz creado ningún TODO</p>
  ) : (
    todos.length > 0 && <p>No hay resultados que coincidan con tu búsqueda</p>
  );
}

export { EmptyTodos };
