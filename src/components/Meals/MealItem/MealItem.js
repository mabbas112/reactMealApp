import CartContext from '../../../store/cart-context';
import classes from './MealItem.module.css'
import React, {useContext,useState} from 'react'
import MealItemForm from './MealItemForm';

export default function MealItem(props) {
    // Here 2 dollar sign what does this means?
    // 1st: For printing of dollar sign for price
    //2nd: It means that we are injecting dynamic content in backticks literal for rendering
    //toFixed means for stoping tilll 2 decimal places
const price= `$${props.price.toFixed(2)}`;
const [deleteItem, setDeleteItem]= useState(false);
const  cartCtx = useContext(CartContext);
const addToCartHandler = amount =>{
cartCtx.addItem({
    id:props.id,
    name:props.name,
    amount:amount,
    price:props.price
    
})
};

const deleteItemHandler = () =>{
    setDeleteItem(true);
}
    return (
        <React.Fragment>
            { !deleteItem &&
            <li className={classes.meal}>

                <div>
                    <h3 onClick={deleteItemHandler} style={{cursor: 'pointer'}}>{props.name}</h3>
                    <div className={classes.description}>{props.description}</div>
                    <div className={classes.price}>{price}</div>
                </div>
                <div>
                   <MealItemForm onAddToCart={addToCartHandler} />
                </div>

            </li> }
        </React.Fragment>
    );
}