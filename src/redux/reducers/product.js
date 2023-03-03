import { PRO_SUCCESS } from "../constanst/actionTypes";

const initialState = [];
export const products = (state = initialState, action) => {
  
    switch (action.type) {
        case PRO_SUCCESS:

            return [...action.payload];

        default:
            return state;
        
    }
}