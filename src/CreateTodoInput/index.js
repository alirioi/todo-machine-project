import './CreateTodoInput.css';

function CreateTodoInput() {
  return (
    <label>
      Agrega una tarea
      <input placeholder="Ir al gimnasio..." className="create-input" />
    </label>
  );
}

export { CreateTodoInput };
