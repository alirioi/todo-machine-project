import React from 'react';
import './App.css';
import taskImg from './task-image.gif';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoInput } from '../CreateTodoInput';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';

function AppUI() {
  const { loading, error, searchedTodos, completeTodo, deleteTodo } =
    React.useContext(TodoContext);

  return (
    <>
      <h1>TODO Machine</h1>
      <main>
        <section className="taskCreation-container">
          <CreateTodoInput />
          <CreateTodoButton />
          <img src={taskImg} alt="task" className="task-img" />
        </section>

        <section className="taskList-container">
          <h1 className="taskList-title">TODOs pendientes</h1>
          <TodoCounter />
          <TodoSearch />

          <TodoList>
            {loading && (
              <>
                <TodosLoading />
                <TodosLoading />
                <TodosLoading />
              </>
            )}
            {error && <TodosError />}
            {!loading && searchedTodos.length === 0 && <EmptyTodos />}

            {searchedTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
        </section>
      </main>
    </>
  );
}

export { AppUI };
