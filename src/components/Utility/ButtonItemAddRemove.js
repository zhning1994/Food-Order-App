import classes from './ButtonItemAddRemove.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const ButtonItemAddRemove = (props) => {
  return (
    <div className={classes.btnAddRemove}>
      <FontAwesomeIcon className={classes.icon} icon={faMinus} />
      <span>{props.quantity}</span>
      <FontAwesomeIcon className={classes.icon} icon={faPlus} />
    </div>
  );
};

export default ButtonItemAddRemove;
