import { CART_POST, CART_SUCCESS,CART_QUANTITY, CART_DELETE } from "../constanst/actionTypes";


const initialState = JSON.parse(localStorage.getItem("cart"))??[];

export const carts = (state = initialState, action) => {
   
  
    switch (action.type) {
        
        case CART_POST:
            state=  [...state,action.payload];
            localStorage.setItem("cart", JSON.stringify(state))
            
                return state
            case CART_QUANTITY:
                state= state.map((cart)=> cart.id===action.payload.id?action.payload:cart)
                localStorage.setItem("cart", JSON.stringify(state))

                return state;
        case CART_DELETE:
            state= state.filter((cart,index)=> index!==action.payload)
            localStorage.setItem("cart", JSON.stringify(state))
            return state

        default:
            return state;
        
    }
}
