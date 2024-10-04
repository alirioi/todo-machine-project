import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon';
import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className="todo-item">
      <CompleteIcon completed={props.completed} onComplete={props.onComplete} />
      <p
        className={`todo-item-text ${
          props.completed && 'todo-item-text--completed'
        }`}
      >
        {props.text}
      </p>
      <DeleteIcon onDelete={props.onDelete} />
    </li>
  );
}

export { TodoItem };
