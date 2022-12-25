import React,{ useReducer } from "react"
import { signUpFormReducer } from "../reducers/signUpFormReducer"
import { signUpFormValidation } from "../utils/signupformvalidation"
const initialFormState = {
    input:{
        "name":'',
        "email":'',
        "password":'',
        "consent":false
    },
    errors:{
        "name":'',
        "email":'',
        "password":'',
    }

}



const FormUsingReducer = () => {

    const [formState,dispatch] = useReducer(signUpFormReducer,initialFormState) 


    return (
            <>
            <form action="" id="reducer-form">
            
             <input type="text" id="name"/>
             <input type="email" id="email"/>
             <input type="password" id="password"/>
             <button type="submit">submit</button>
            </form>
            </>
    )
}

export { FormUsingReducer }