import React from 'react';
import { TodoIcon } from './TodoIcon';

function CompleteIcon({ completed, onComplete }) {
  return (
    <TodoIcon type={completed ? 'check' : 'checkBlank'} onClick={onComplete} />
  );
}

export { CompleteIcon };
