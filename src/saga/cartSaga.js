// import * as cartService from "../api/cartService";

// import { act_cart_success } from "../redux/action";
// import { CART_SUCCESS } from "../redux/constanst/actionTypes";
// import { call, put } from "redux-saga/effects";

// export const CART_SAGA_GET = function* () {
//     let listCart = yield call(cartService.CART_GET_SERVICE);
//     try {
//         console.log(listCart);
//        let list= yield put(act_cart_success(CART_SUCCESS, listCart))
//         console.log(list);
//     } catch (error) {
//         console.log(error);
//     }
// }
// export const CART_SAGA_POST = function* (action) {
//     try {
//         // them oi thanh cong
//         console.log('vao saga',action);
//         yield call(cartService.CART_POST_SERVICE, action.payload);
//         yield CART_SAGA_GET();
//     } catch (error) {
//         console.log(error);
//     }
// }
// export const CART_SAGA_DELETE = function* (action) {
//     try {
//         console.log("action.payload",action.payload);
//         yield call(cartService.CART_SAGA_DELETE, action.payload);
//         yield CART_SAGA_GET();
//     } catch (error) {
//         console.log(error);
//     }
// };
