import React, { Fragment, useState } from "react";

const InputForm = (props) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    // const [amount, setAmount] = useState('');

    
    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }
    const descriptionChangeHandler = (event) => {
        setDescription(event.target.value);
    }
    const priceChangeHandler = (event) => {
        setPrice(event.target.value);
    }
    // const amountChangeHandler = (event) => {
    //     setAmount(event.target.value);
    // }

    const formSubmitHandler = (event) => {
        event.preventDefault();

        // console.log(name);
        // console.log(description);
        // console.log(price);
        // console.log(amount);
        props.inputFormData({
            name:name,
            description:description,
            price:+price,
            // amount:amount
        })

        setName('')
        setDescription('')
        // setAmount('')
        setPrice('')

    }

    return (
        <Fragment>
            <form onSubmit={formSubmitHandler}>
                <label>Dish Name</label>
                <input type="text" onChange={nameChangeHandler} value={name}></input>
                <label>Description</label>
                <input type="text" onChange={descriptionChangeHandler} value={description}></input>
                <label>Price</label>
                <input type="number" onChange={priceChangeHandler} value={price}></input>
                {/* <label>Amount</label> */}
                {/* <input type="number" onChange={amountChangeHandler} min='1' max='5' value={amount}></input> */}
                <button type="submit">Submit</button>
            </form>
        </Fragment>
    );
}
export default InputForm;