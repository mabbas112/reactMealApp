import classes from "./MealItemForm.module.css";
import React, { useRef, useState } from "react";
import Input from "../../UI/Input";

export default function MealItemForm(props) {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();
    const submitHandler = (event) => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        // Here plus sign will automatically convert string into number
        const enteredAmountNumber = +enteredAmount;
        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setAmountIsValid(false);
            return; 
        }
        props.onAddToCart(enteredAmountNumber);
    };

    
    return (
        <React.Fragment>
            <form className={classes.form} onSubmit={submitHandler}>
                <Input
                    ref={amountInputRef}
                    label="Amount"
                    input={{
                        id: "amount",
                        type: "number",
                        min: "1",
                        max: "5",
                        step: "1",
                        defaultValue: "1",
                    }}
                />
                <button>+ Add</button>
                {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
            </form>
        </React.Fragment>
    );
}

