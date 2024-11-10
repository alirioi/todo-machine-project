import './CreateTodoInput.css';
import taskImg from './task-image.gif';

function CreateTodoInput() {
  return (
    <label className="create-input-container">
      Agrega una tarea
      <input placeholder="Ir al gimnasio..." className="create-input" />
      <img src={taskImg} alt="task" className="create-input-img" />
      <button className="create-input-button">Guardar</button>
    </label>
  );
}

export { CreateTodoInput };
