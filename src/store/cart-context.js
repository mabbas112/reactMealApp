import React from "react";

const CartContext = React.createContext({
    item: [],
    totalAmount:0,
    addItem:(item)=>{},
    removeItem :(id)=>{},
    removeAllItem:(item)=>{}
}); 
export default CartContext;



