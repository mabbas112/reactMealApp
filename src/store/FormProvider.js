import React from "react";
import FormContext from "./form-context";
const FormProvider = (props) => {

    const formContext={
        name:'',
        description:'', 
        price:+''
    }

    return (
        <FormContext.Provider value={formContext}>
            {props.children}
        </FormContext.Provider>
    );
}
export default FormProvider;