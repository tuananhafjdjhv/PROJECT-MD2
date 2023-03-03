import { USER_SUCCESS } from "../constanst/actionTypes"

const initialState = []
export const users = (state = initialState, action) => {

    switch (action.type) {
        
        case USER_SUCCESS:
            //xử lí trường hợp gọi API thành công
           
            return [...action.payload]
            
        default:
            return state
    }
}