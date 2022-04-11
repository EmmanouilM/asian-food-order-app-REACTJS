import { Fragment } from "react";
import classes from "./Header.module.css";
import Sushi from "../../assets/sushi.svg";
import Shrimps from "../../assets/shrimps.svg";
import Wok from "../../assets/wok.svg";
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1 className={classes.title}>
          MIYA<sup>&copy;</sup>
        </h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <section className={classes.heading}>
        <div className={classes.heading__text}>
          EVERYTHING
          <div>
            <img src={Sushi} alt='Sushi!' />
          </div>
        </div>
        <div className={classes.heading__text}>
          YOU
          <div>
            <img src={Shrimps} alt='Shrimps!' />
          </div>
          WANT IN
        </div>
        <div className={classes.heading__text}>
          ASIAN
          <div>
            <img src={Wok} alt='Wok!' />
          </div>
          FOOD
        </div>
      </section>
    </Fragment>
  );
};

export default Header;
