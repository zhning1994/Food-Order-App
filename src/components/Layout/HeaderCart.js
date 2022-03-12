import classes from './HeaderCart.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
const HeaderCart = (props) => {
  return (
    <>
      <button className={classes.cart}>
        <FontAwesomeIcon size='xl' icon={faCartArrowDown} />
        <span className={classes.cart___badge}>20</span>
      </button>
    </>
  );
};

export default HeaderCart;
