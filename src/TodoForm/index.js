import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';
import taskImg from './task-image.gif';

function TodoForm() {
  const { addTodo, setOpenModal } = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = (e) => {
    setOpenModal(false);
  };

  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  };

  return (
    <form className="TodoForm-container" onSubmit={onSubmit}>
      <label>Agrega un nuevo TODO</label>
      <textarea
        placeholder="Reunion de trabajo..."
        className="TodoForm-input"
        value={newTodoValue}
        onChange={onChange}
        required
      />
      <div className="TodoForm-buttons-container">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button className="TodoForm-button TodoForm-button--add">
          Agregar
        </button>
      </div>
      <img src={taskImg} alt="task" className="TodoForm-img" />
    </form>
  );
}

export { TodoForm };
