import React from 'react';
import './TodosLoading.css';

function TodosLoading() {
  return (
    <div className="LoadingTodo-container">
      <span className="LoadingTodo-dot"></span>
      <p className="LoadingTodo-text"></p>
      <span className="LoadingTodo-dot"></span>
    </div>
  );
}

export { TodosLoading };
