import { BUY_MOBILE } from "../actions/actiontype"

const initialState = {
    numOfMobiles:100
}



const Mobilereducer = (state=initialState,action) => {
    switch(action.type){
        case BUY_MOBILE:
            return{numOfMobiles:state.numOfMobiles-1}
            default: 
            return state;
    }
}

export default Mobilereducer;