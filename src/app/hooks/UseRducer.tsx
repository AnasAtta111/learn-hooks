import { useReducer } from "react"

export const INITAIL_Value = {
    name:'',
    email:'',
    password: '',
    number:0
}


export const reducer = (state:any, action:any) => {
    switch(action.type) {
        case 'ChangeInput': 
        return {
            ...state,
            [action.payload.name]: action.payload.value
        }

        case 'AddNumber': 
        return {
            ...state,
            number: state.number + 1
        }
        case 'SubNumber': 
        return {
            ...state,
            number: state.number - 1,
        }

    default:
        return state
    } 
}
