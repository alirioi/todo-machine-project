import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className="todo-item">
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
        V
      </span>
      <p
        className={`todo-item-text ${
          props.completed && 'todo-item-text--completed'
        }`}
      >
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        X
      </span>
    </li>
  );
}

export { TodoItem };
