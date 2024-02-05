const { createStore, combineReducers, applyMiddleware } = require("@reduxjs/toolkit")
const logger = require('redux-logger').default
const thunk = require('redux-thunk');
const BUY_LAPTOP="BUY_LAPTOP";
const BUY_MOBILE="BUY_MOBILE";

const initialState = {
    numOfLaptops:100
   
}
const initialMobile = {
    numOfMobiles:1000
   
}

const buyLaptop = () => {
    return{
        type:"BUY_LAPTOP"
    }
}
const buyMobile = () => {
    return{
        type:"BUY_MOBILE"
    }
}

const Laptopreducer  = (state=initialState,action) => {
 

    switch(action.type){
        case "BUY_LAPTOP":
            return {numOfLaptops:state.numOfLaptops-1}
            default:
                return state;
    }

}
const Mobilereducer  = (state=initialMobile,action) => {
 

    switch(action.type){
        case "BUY_MOBILE":
            return {numOfMobiles:state.numOfMobiles-1}
            default:
                return state;
    }

}

const rootReducer = combineReducers({Laptaps:Laptopreducer, Mobiles:Mobilereducer});
const store = createStore(rootReducer,applyMiddleware(logger));

console.log(store);
store.subscribe(()=>{console.log(store.getState())});
store.dispatch(buyLaptop());
store.dispatch(buyLaptop());
store.dispatch(buyLaptop());
store.dispatch(buyLaptop());
store.dispatch(buyLaptop());
store.dispatch(buyMobile());
store.dispatch(buyMobile());
store.dispatch(buyMobile());
store.dispatch(buyMobile());
store.dispatch(buyMobile());
store.dispatch(buyMobile());
