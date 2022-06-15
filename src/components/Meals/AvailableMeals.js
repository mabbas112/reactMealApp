import React from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
const DUMMY_MEALS = [
  {

    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];


export default function AvailableMeals(props) {

//   let mealsList={id:props.mealObject.id, name:props.mealObject.name, description:props.mealObject.description, price:props.mealObject.price, ...DUMMY_MEALS};
// console.log(mealsList);
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
    // Here is an alternative we can go for 
    //we can simply pass meal as object and in child component we will use using props.meal.name etc like that
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <React.Fragment>
      <section className={classes.meals}>
        <Card>
          <ul>{mealsList}</ul>
        </Card>
      </section>
    </React.Fragment>
  );
}
