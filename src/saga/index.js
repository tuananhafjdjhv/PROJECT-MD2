import { all,takeLatest } from "redux-saga/effects";
import * as actionTypes from "../redux/constanst/actionTypes";
import * as userSaga from "./userSaga";
import * as proSaga from "./proSaga";
import * as cartSaga from "./cartSaga";

 
export const rootSaga= function*() {
   yield all([
        takeLatest(actionTypes.USER_GET,userSaga.USER_SAGA_GET),
        takeLatest(actionTypes.USER_POST,userSaga.USER_SAGA_POST),

        takeLatest(actionTypes.PRO_GET,proSaga.PRO_SAGA_GET),
        takeLatest(actionTypes.PRO_POST,proSaga.PRO_SAGA_POST),
        takeLatest(actionTypes.PRO_DELETE,proSaga.PRO_SAGA_DELETE),
        takeLatest(actionTypes.PRO_UPDATE,proSaga.PRO_SAGA_UPDATE),
       
    ])
}