import React from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";



export default function AvailableMeals(props) {
  //   let mealsList={id:props.mealObject.id, name:props.mealObject.name, description:props.mealObject.description, price:props.mealObject.price, ...DUMMY_MEALS};
  // console.log(mealsList);
  // console.log(DUMMY_MEALS);
  const mealsList = props.DUMMY_MEALS.map((meal) => (
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
