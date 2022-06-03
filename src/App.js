import React,{useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
function App() {
   
  const [cartIsShown, setCartIsShown]= useState(false);

const showCartHandler = () =>{
  setCartIsShown(true);
}
const hideCartHandler = () =>{
  setCartIsShown(false);
}


  return (
    <React.Fragment>
      {/* Here it means render the code dynamically
       If condition will true then render the component otherwise not*/}
     {cartIsShown && <Cart onClose={hideCartHandler}/>}
     {/* onShowCart function name is up to you, but it is moslty followed convention in which we starting with 'on' */}
    <Header onShowCart={showCartHandler}/>
    <main>
    <Meals/>
    </main>
    </React.Fragment>
  );
}

export default App;
