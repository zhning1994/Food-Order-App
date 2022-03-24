import classes from './MenuItem.module.css';
import ButtonItemAddRemove from '../../Utility/ButtonItemAddRemove';

const MenuItem = ({ item }) => {
  const { id, name, info, price, img, category } = item;
  return (
    <div className={classes.item}>
      <img src={img} alt={category} />
      <div className={classes['item-head_desc']}>
        <p className={classes['head_desc-name']}>{name}</p>
        <p className={classes['head_desc-info']}>
          <small>{info}</small>
        </p>
      </div>
      <div className={classes['item-foot_desc']}>
        <span className={classes['foot_desc-price']}>RM{price}</span>
        <ButtonItemAddRemove quantity={33} />
      </div>
    </div>
  );
};

export default MenuItem;
