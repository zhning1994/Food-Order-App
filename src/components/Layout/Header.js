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
        <div>Home</div>
        <div>Menu</div>
        <div>Services</div>
        <div>Contact</div>
        <div>
          <FontAwesomeIcon size='xl' icon={faMagnifyingGlass} />
        </div>
        <div>
          <HeaderCart />
        </div>
      </header>
    </>
  );
};

export default Header;
