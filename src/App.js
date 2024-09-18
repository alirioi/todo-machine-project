import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoInput } from './CreateTodoInput';
import { CreateTodoButton } from './CreateTodoButton';
import taskImg from './assets/task-image.gif';

const defaultTodos = [
  { text: 'item numero 1', completed: false },
  { text: 'item numero 2', completed: true },
  { text: 'item numero 3', completed: false },
  { text: 'item numero 4', completed: true },
];

function App() {
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
        </section>
      </main>
    </>
  );
}

export default App;
