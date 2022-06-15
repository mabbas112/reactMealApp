import classes from "./HeaderCartButton.module.css";
import React, { useContext, useEffect, useState } from "react";
import CardIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
// import InputForm from "../InputForm/InputForm"

const HeaderCartButton = (props) => {

  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.item.reduce(
    (curNumber, item) => {
      return curNumber + item.amount;
    },
    0
  );
// const {items}= cartCtx;
  const [btnIsHighLighted, setBtnIsHighLighted] = useState(false);
  const btnClasses = `${classes.button} ${ btnIsHighLighted ? classes.bump : ''}`;
  
  
  useEffect(() => {
    if(cartCtx.item.length===0)
    return;
    setBtnIsHighLighted(true);
   const timer = setTimeout(
      ()=>{
        setBtnIsHighLighted(false);
      },300
    );


    return ()=>{
      clearTimeout(timer);
    }
  }, [cartCtx.item]);

// const newItemAddHandler = () =>{
//   // <InputForm/>
// }

  return (
    <React.Fragment>
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        {/* We can also use SVG code in our JSX */}
        <CardIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
    {/* <button className={btnClasses} onClick={newItemAddHandler}>New Item</button> */}
    </React.Fragment>
  );
};

export default HeaderCartButton;
