import  * as userService  from "../api/userService";
import { act_user_success } from "../redux/action";
import { USER_SUCCESS } from "../redux/constanst/actionTypes";    
import { call,put } from "redux-saga/effects";

// các saga làm việc với 
export const USER_SAGA_GET = function* () {
    let listUser = yield call(userService.USER_GET_SERVICE);
    try {
        
      yield put(act_user_success(USER_SUCCESS, listUser))
        
    } catch(error) {
        console.log(error);
    }
   
}
export const USER_SAGA_POST = function* (action) {
    try {
        // them oi thanh cong
        yield call(userService.USER_POST_SERVICE, action.payload);
       yield USER_SAGA_GET();
    } catch (error) {
        console.log(error);
    }
}
// export const PRO_SAGA_DELETE = function* (action) {
//     try {
//       yield call(proService.PRO_SAGA_DELETE, action.payload);
//       yield PRO_SAGA_GET();
//     } catch (error) {
//       console.log(error);
//     }
//   };
  export const PRO_SAGA_UPDATE = function* (action) {
    try {
      yield call(proService.PRO_SAGA_UPDATE, action.payload);
      yield PRO_SAGA_GET();
    } catch (error) {
      console.log(error);
    }
  };