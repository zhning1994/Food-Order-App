import classes from './Features.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRecycle } from '@fortawesome/free-solid-svg-icons';
import food1 from '../../assets/Realistic food vector 1.svg';
import food5 from '../../assets/Realistic food vector 5.svg';
import food8 from '../../assets/Realistic food vector 8.svg';
import food11 from '../../assets/Realistic food vector 11.svg';

const Features = () => {
  return (
    <section className={classes.featuresContainer}>
      <div className={classes.featuresAside}>
        <div className={classes.zeroWaste}>
          Zero Waste Delivery{' '}
          <span>
            <FontAwesomeIcon icon={faRecycle} />
          </span>
        </div>
        <div className={classes.slogan}>
          Fastest & Cheapest Delivery in{' '}
          <span className={classes.slogan___my}>Malaysia</span>
        </div>
        <div className={classes.caption}>
          You can enjoy more than 100 options of fresh foods without leaving
          your house. Let's order and have a bite.
        </div>
        <button className={classes.btn}>Order Now</button>
      </div>
      <div className={classes.food___container}>
        <div className={classes.food1}>
          <img className={classes.food1img} src={food1} alt='fast food' />
          <div>
            <h5>Fast Food</h5>
            <p>Texas Hellfire Burger</p>
            <p className={classes.priceTag}>RM 5.90</p>
          </div>
        </div>
        <div className={classes.food5}>
          <img className={classes.food5img} src={food5} alt='asian food' />
          <div>
            <h5>Asian Food</h5>
            <p>Mango Teriyaki Sushi</p>
            <p className={classes.priceTag}>RM 7.99</p>
          </div>
        </div>
        <div className={classes.food8}>
          <img className={classes.food8img} src={food8} alt='noodles' />
          <div>
            <h5>Noodles</h5>
            <p>Spicy Aglio Olio</p>
            <p className={classes.priceTag}>RM 15.99</p>
          </div>
        </div>
        <div className={classes.food11}>
          <img className={classes.food11img} src={food11} alt='desserts' />
          <div>
            <h5>Desserts</h5>
            <p>Croissant Aux Fraises</p>
            <p className={classes.priceTag}>RM 6.00</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
