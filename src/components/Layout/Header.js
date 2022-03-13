import classes from './Header.module.css';
import HeaderCart from './HeaderCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>MComida</h1>
        <div>
          <h3>Home</h3>
          <h3>Promotions</h3>
          <h3>Menu</h3>
          <h3>Contact</h3>
        </div>
        <div>
          <FontAwesomeIcon size='xl' icon={faMagnifyingGlass} />
          <HeaderCart />
        </div>
      </header>
    </>
  );
};

export default Header;
