import './App.css';
import taskImg from './task-image.gif';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoInput } from '../CreateTodoInput';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI({
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
}) {
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
          <TodoCounter total={totalTodos} completed={completedTodos} />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />

          <TodoList>
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
