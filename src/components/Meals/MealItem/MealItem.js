import { useContext } from 'react';
import Card from '../../UI/Card';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `€${props.price.toFixed(2)}`;
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
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
          <MealItemForm id={props.id} onAddToCart={addToCartHandler}/>
      </div>
    </div>
    </div>
    </Card>
   
  );
};

export default MealItem;
