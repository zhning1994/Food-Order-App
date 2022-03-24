import { menuItemsData } from './data';
import MenuItem from './MenuItem/MenuItem';
import classes from './Menu.module.css';

const Menu = () => {
  return (
    <main className={classes.food___Container}>
      {menuItemsData.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </main>
  );
};

export default Menu;
