import { Fragment } from "react";
import Header from "./components/Layout/Header";
import MealsMenu from "./components/Meals/MealsMenu";
function App() {
  return (
    <Fragment>
      <Header />
      <MealsMenu/>
    </Fragment>
  );
}

export default App;
