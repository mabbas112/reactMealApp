import React, { Fragment, useEffect, useState } from "react";

const InputForm = (props) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [edit, setEdit] = useState(false);

    //Form should update when use click on edit button
    const { editItem } = props;
    useEffect(
        () => {
            if (editItem) {
                setName(editItem.name);
                setDescription(editItem.description);
                setPrice(editItem.price);
                setEdit(true);
            }
        },
        [editItem]
    )

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }
    const descriptionChangeHandler = (event) => {
        setDescription(event.target.value);
    }
    const priceChangeHandler = (event) => {
        setPrice(event.target.value);
    }
    const formSubmitHandler = (event) => {
        event.preventDefault();
        const itemObj = {
            name: name,
            description: description,
            price: +price,
        }

        if (!edit) {
            props.inputFormData(itemObj)
        } else {
            setEdit(false);
            props.inputEditFormData(itemObj)
        }

        setName('')
        setDescription('')
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
                <button type="submit">Submit</button>
            </form>
        </Fragment>
    );
}
export default InputForm;