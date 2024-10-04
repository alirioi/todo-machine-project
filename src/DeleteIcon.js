import React from 'react';
import { TodoIcon } from './TodoIcon';

function DeleteIcon({ onDelete }) {
  return <TodoIcon type="delete" color="#fff" onClick={onDelete} />;
}

export { DeleteIcon };
