import classes from './Header.module.css';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Welcome to Melhor Comida</h1>
      </header>
    </>
  );
};

export default Header;
