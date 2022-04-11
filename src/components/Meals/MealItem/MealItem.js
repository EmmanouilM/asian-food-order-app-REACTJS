import Card from '../../UI/Card';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
  const price = `€${props.price.toFixed(2)}`;
  return (
    <Card>
 <div className={classes.meal}>
        <div className={classes.topContent}>
          <img src={props.image} className={classes.image} alt='Meal' />
          <h3>{props.name}</h3>
        </div>
        <div className={classes.bottomContent}>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
          <div>
          <MealItemForm />
      </div>
    </div>
    </div>
    </Card>
   
  );
};

export default MealItem;
