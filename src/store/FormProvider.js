import React from "react";
import FormContext from "./form-context";
const FormProvider = (props) => {

    const formContext={
        id:Math.random().toString(),
        name:'',
        description:'',
        price:0
    }

    return (
        <FormContext.Provider value={formContext}>
            {props.children}
        </FormContext.Provider>
    );
}
export default FormProvider;