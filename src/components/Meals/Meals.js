import React, { useState, useEffect } from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import InputForm from "../InputForm/InputForm";

const Meals = () => {
    const [curObject, setCurObject] = useState(null);
    const [dbItems, setDbItems] = useState([]);
    const [editItemId, setEditItemId] = useState('');

    async function inputFormDataHandler(item) {
        item = { id: Math.random().toString(), ...item };
        await fetch('https://reactmealapp-1d919-default-rtdb.firebaseio.com/mealItem.json', {
            method: 'POST',
            body: JSON.stringify(item),
            header: {
                'Content-Type': 'application/json'
            }
        });
        setDbItems(preState => [item, ...preState])

    }
    const inputEditFormDataHandler = (item) => {

        //Assigning changes to edited item.
        for (const i in dbItems) {
            if (dbItems[i].id === editItemId) {
                dbItems[i].name = item.name;
                dbItems[i].description = item.description;
                dbItems[i].price = item.price;
            }
        }
        setDbItems([...dbItems]);
    }
    const fetchData = async () => {
        const response = await fetch('https://reactmealapp-1d919-default-rtdb.firebaseio.com/mealItem.json')
        const data = await response.json();
        const DBItems = [];
        for (const id in data) {
            DBItems.push({
                id: id,
                name: data[id].name,
                description: data[id].description,
                price: +data[id].price
            })

        };
        setDbItems(DBItems);
    }
    const editItemHandler = (props) => {
        const obj = {
            name: props.name,
            description: props.description,
            price: props.price
        }
        setEditItemId(props.id);
        setCurObject(obj);
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <React.Fragment>
            <MealsSummary />
            <InputForm
                inputFormData={inputFormDataHandler}
                inputEditFormData={inputEditFormDataHandler}
                editItem={curObject}
            />
            <AvailableMeals DUMMY_MEALS={dbItems} editItem={editItemHandler} />
        </React.Fragment>
    );

}

export default Meals;