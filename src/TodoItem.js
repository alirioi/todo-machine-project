import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className="todo-item">
      <span className="Icon Icon-check Icon-check--active">V</span>
      <p className="todo-item-text todo-item-text--completed">{props.text}</p>
      <span className="Icon Icon-delete">X</span>
    </li>
  );
}

export { TodoItem };
