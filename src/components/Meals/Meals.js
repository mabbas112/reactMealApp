import React, { useState, useEffect } from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import InputForm from "../InputForm/InputForm";
// const DUMMY_MEALS = [
//     {

//         id: "m1",
//         name: "Sushi",
//         description: "Finest fish and veggies",
//         price: 22.99,
//     },
//     {
//         id: "m2",
//         name: "Schnitzel",
//         description: "A german specialty!",
//         price: 16.5,
//     },
//     {
//         id: "m3",
//         name: "Barbecue Burger",
//         description: "American, raw, meaty",
//         price: 12.99,
//     },
//     {
//         id: "m4",
//         name: "Green Bowl",
//         description: "Healthy...and green...",
//         price: 18.99,
//     },];


const Meals = (props) => {
    const [curObject, setCurObject] = useState(null);
    const [dbItems, setDbItems] = useState([]);
    const [editItemId, setEditItemId]=useState('');

    async function inputFormDataHandler(item) {
        item = { id: Math.random().toString(), ...item };
        await fetch('https://reactmealapp-1d919-default-rtdb.firebaseio.com/mealItem.json', {
            method: 'POST',
            body: JSON.stringify(item),
            header: {
                'Content-Type': 'application/json'
            }
        });
        setDbItems(preState => [...preState, item])

    }
    const inputEditFormDataHandler = (item)=>{
        console.log(dbItems);
        console.log(item);
        console.log(editItemId);

        for(const i in dbItems){
            if(dbItems[i].id===editItemId){
                dbItems[i].name=item.name;
                dbItems[i].description=item.description;
                dbItems[i].price=item.price;
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
        setEditItemId(props.id);
        const obj = {
            name: props.name,
            description: props.description,
            price: props.price
        }
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