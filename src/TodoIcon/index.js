import { ReactComponent as CheckBlank } from './icons/check_box_blank.svg';
import { ReactComponent as Check } from './icons/check_box.svg';
import { ReactComponent as Delete } from './icons/delete.svg';
import './TodoIcon.css';

const iconTypes = {
  check: <Check />,
  checkBlank: <CheckBlank />,
  delete: <Delete />,
};

function TodoIcon({ type, onClick }) {
  return (
    <span className={`Icon Icon-${type}`} onClick={onClick}>
      {iconTypes[type]}
    </span>
  );
}

export { TodoIcon };
