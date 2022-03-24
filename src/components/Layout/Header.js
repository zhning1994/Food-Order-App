import classes from './Header.module.css';
import HeaderCart from './HeaderCart';
import Brand from './Brand';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <Brand />
        <div className={classes.header___item}>
          <ul className={classes.list}>
            <li className={classes.listItem}>Home</li>
            <li className={classes.listItem}>Menu</li>
            <li className={classes.listItem}>Services</li>
            <li className={classes.listItem}>Contact Us</li>
          </ul>
        </div>
        <div>
          <FontAwesomeIcon size='xl' icon={faMagnifyingGlass} />
        </div>
        <div>
          <HeaderCart />
        </div>
        <div>
          Sign In
        </div>
      </header>
    </>
  );
};

export default Header;
