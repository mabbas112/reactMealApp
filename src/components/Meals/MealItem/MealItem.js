import CartContext from '../../../store/cart-context';
import classes from './MealItem.module.css'
import React, { useContext, useState } from 'react'
import MealItemForm from './MealItemForm';

export default function MealItem(props) {
    // Here 2 dollar sign what does this means?
    // 1st: For printing of dollar sign for price
    //2nd: It means that we are injecting dynamic content in backticks literal for rendering
    //toFixed means for stoping tilll 2 decimal places
    // const [name,setName]=useState(props.name);
    // const [description, setDescription]=useState(props.description);
    // const [price,setPrice]=useState(props.price);
    // const [editItem, setEditItem] = useState(false);

    const [deleteItem, setDeleteItem] = useState(false);
    const cartCtx = useContext(CartContext);
    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount:amount,
            price: props.price

        })
    };
    // const deleteFromFirebaseHandler = async () => {
    //     const response = await fetch('https://reactmealapp-1d919-default-rtdb.firebaseio.com/mealItem.json/' + props.id, {
    //         method: 'DELETE'
    //     })
    //     const data = await response.json();
    //     console.log(data);
    // }
    const deleteItemHandler = () => {
        // deleteFromFirebaseHandler();
        setDeleteItem(true);
    }
    const editItemHandler = () => {
        props.editItem(props);
    }
    // const inputFormDataHandler = (item) => {
    //     // await fetch('https://reactmealapp-1d919-default-rtdb.firebaseio.com/mealItem.json/'+props.id, {
    //     //         method: 'PUT',
    //     //         body: JSON.stringify(item),
    //     //         header: {
    //     //             'Content-Type': 'application/json'
    //     //         }
    //     //     });
    //     // setName(item.name);
    //     // setDescription(item.description);
    //     // setPrice(item.price);
    //     // setEditItem(false);
    // }
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