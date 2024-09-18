import './CreateTodoInput.css';

function CreateTodoInput() {
  return (
    <label>
      Introduce una tarea
      <input placeholder="Ir al gimnasio" className="create-input" />
    </label>
  );
}

export { CreateTodoInput };
