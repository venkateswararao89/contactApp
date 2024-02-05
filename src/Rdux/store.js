import { combineReducers, createStore } from "@reduxjs/toolkit";
 import Laptopreducer from "./Reducers/LaptopReducer";
 import Mobilereducer from "./Reducers/MobileReducer";

 const rootReducer = combineReducers({

    Laptops:Laptopreducer,
    mobiles:Mobilereducer})
const store = createStore(rootReducer)

export default store