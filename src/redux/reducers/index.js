import { combineReducers } from "redux";
import { users } from "./user";
import { products } from "./product";
import { carts } from "./cart";

export const rootReducer = combineReducers({ users, products,carts });