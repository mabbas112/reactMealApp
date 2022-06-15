import React, { useState } from "react";
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
    const [newItem,setNewItem]=useState([]);
// const [isItemAdded, setIsItemAdded]=useState(false);
    async function inputFormDataHandler(item) {
        item = { id: Math.random().toString(), ...item };
        await fetch('https://reactmealapp-1d919-default-rtdb.firebaseio.com/mealItem.json', {
            method: 'POST',
            body: JSON.stringify(item),
            header: {
                'Content-Type': 'application/json'
            }
        });
        setNewItem(
            preState =>[...preState,item]
        );
    
    }
//     useEffect(
//     () => {
//       const fetchedData = async () => {
//         const response = await fetch('https://reactmealapp-1d919-default-rtdb.firebaseio.com/mealItem.json')
//         const data = await response.json();
//         for (const id in data) {
//           DUMMY_MEALS.push({
//             id: id,
//             name: data[id].name,
//             description: data[id].description,
//             price: +data[id].price
//           });
//         };
//       }
//       fetchedData();
//     }, [isItemAdded]
//   );

    return (
        <React.Fragment>
            <MealsSummary />
            <InputForm inputFormData={inputFormDataHandler} />
            <AvailableMeals DUMMY_MEALS={newItem} />
        </React.Fragment>

    );

}

export default Meals;