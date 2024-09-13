import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';
import React from 'react';

const defaultTodos = [
  { text: 'item numero 1', completed: false },
  { text: 'item numero 2', completed: true },
  { text: 'item numero 3', completed: false },
  { text: 'item numero 4', completed: true },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter total={3} completed={1} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
