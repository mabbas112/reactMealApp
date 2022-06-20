import CartContext from '../../../store/cart-context';
import classes from './MealItem.module.css'
import React, { useContext, useState } from 'react'
import MealItemForm from './MealItemForm';

export default function MealItem(props) {

    const [deleteItem, setDeleteItem] = useState(false);
    const cartCtx = useContext(CartContext);
    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price

        })
    };
    const deleteItemHandler = () => {
        setDeleteItem(true);
    }
    const editItemHandler = () => {
        props.editItem(props);
    }
    return (
        <React.Fragment>
            {!deleteItem &&
                <li className={classes.meal}>

                    <div>
                        <h3>{props.name}</h3>
                        <div className={classes.description}>{props.description}</div>
                        <div className={classes.price}>{`$${props.price.toFixed(2)}`}</div>
                        <button onClick={deleteItemHandler} style={{ cursor: 'pointer', marginRight: 20 }}>Delete</button>
                        <button onClick={editItemHandler}>Edit</button>
                    </div>
                    <div>
                        <MealItemForm onAddToCart={addToCartHandler} />
                    </div>

                </li>}
        </React.Fragment>
    );
}