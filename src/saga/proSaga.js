import * as proService from "../api/proService";
import { act_pro_success } from "../redux/action";
import { PRO_SUCCESS } from "../redux/constanst/actionTypes";
import { call, put } from "redux-saga/effects";

// các saga làm việc với 
export const PRO_SAGA_GET = function* () {
    let listProduct = yield call(proService.PRO_GET_SERVICE);
    try {

        yield put(act_pro_success(PRO_SUCCESS, listProduct))

    } catch (error) {
        console.log(error);
    }
}
export const PRO_SAGA_POST = function* (action) {
    try {
        // them oi thanh cong
        console.log('vao saga');
        yield call(proService.PRO_POST_SERVICE, action.payload);
        yield PRO_SAGA_GET();
    } catch (error) {
        console.log(error);
    }
}
export const PRO_SAGA_DELETE = function* (action) {
    try {
        yield call(proService.PRO_SAGA_DELETE, action.payload);
        yield PRO_SAGA_GET();
    } catch (error) {
        console.log(error);
    }
};
export const PRO_SAGA_UPDATE = function* (action) {
    try {
        yield call(proService.PRO_SAGA_UPDATE, action.payload);
        yield PRO_SAGA_GET();
    } catch (error) {
        console.log(error);
    }
};