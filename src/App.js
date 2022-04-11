import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import MealsMenu from "./components/Meals/MealsMenu";
import Cart from "./components/Cart/Cart";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <MealsMenu/>
    </Fragment>
  );
}

export default App;
