import logoImage from '../../assets/MComida-1.png';
import classes from './Brand.module.css';
const Brand = () => {
  return (
    <div className={classes.brand___container}>
      <img
        className={classes.brand___logo}
        src={logoImage}
        alt='Logo if MComida'
      />
    </div>
  );
};

export default Brand;
