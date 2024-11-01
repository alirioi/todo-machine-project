import './CreateTodoButton.css';

function CreateTodoButton() {
  return (
    <button
      className="create-button"
      onClick={() => console.log('le diste clic')}
    >
      Guardar
    </button>
  );
}

export { CreateTodoButton };
