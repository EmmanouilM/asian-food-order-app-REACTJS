import { useEffect, useState } from "react";
import MealItem from "./MealItem/MealItem";
import classes from "./MealsMenu.module.css";
import Chopsticks from "../../assets/chopsticks.svg";

/* const MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "With salmon and cucumber ",
    price: 12.5,
    image:
      "https://images.unsplash.com/photo-1607301405390-d831c242f59b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: "m2",
    name: "Dim Sums",
    description: "With soya dip",
    price: 6.5,
    image:
      "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: "m3",
    name: "Buckwheat Noodles",
    description: "With leek and zucchini",
    price: 11.95,
    image:
      "https://images.unsplash.com/photo-1516901121982-4ba280115a36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
  },
  {
    id: "m4",
    name: "Ramen Prawns",
    description: "With fresh vegetables",
    price: 10.5,
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
  },
  {
    id: "m5",
    name: "Veggie Salad",
    description: "With wakame and tofu",
    price: 10.95,
    image:
      "https://images.unsplash.com/photo-1625540002162-00320b5c6b63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=502&q=80",
  },
  {
    id: "m6",
    name: "Stone Bowl",
    description: "With beef & teriyaki sauce",
    price: 7.5,
    image:
      "https://images.unsplash.com/photo-1580442151529-343f2f6e0e27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
]; */

const MealsMenu = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://asian-order-food-http-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const responseData = await response.json();

      const fetchedMeals = [];
      for (const key in responseData) {
        fetchedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
          image: responseData[key].image,
        });
      }
      setMeals(fetchedMeals);
      setIsLoading(false);
    };
    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);
  
  if (isLoading) {
    return (
      <section className={classes.mealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }
  
  if (httpError) {
    return (
      <section className={classes.mealsError}>
        <p>{httpError}</p>
      </section>
    );
  }
  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      image={meal.image}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <div className={classes.meals}>
      <div className={classes.menu}>
        <span>MENU</span>
        <div>
          <img src={Chopsticks} alt='Chopsticks!' />
        </div>
      </div>
      <div className={classes.rectangle}></div>
      {mealsList}
    </div>
  );
};

export default MealsMenu;
