import React from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}> 
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      {/* Here we can't use dot operator because css have dash operator in it */}
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious meals' />
      </div>
      
    </React.Fragment>
  );
};
export default Header;