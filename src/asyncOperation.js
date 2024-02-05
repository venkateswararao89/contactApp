const { createStore, applyMiddleware } = require("@reduxjs/toolkit")
const thunk = require('redux-thunk');
const axios = require('axios');


const FETCH_USERS_REQUEST = 'FETCH_USER_REQUEST';
const FETCH_USERS_SUCESS = 'FETCH_USER_SUCESS';
const FETCH_USERS_FAIL = 'FETCH_USER_FAIL';

const initialState = {
    userd:[],
    erroe:'',
    isLoading:false

}

const fetchUsersRequest=() =>{
    return {
        type:FETCH_USERS_REQUEST
    }
}
const fetchUsersSucess=(users) =>{
    return {
        type:FETCH_USERS_SUCESS,
        data:users
    }
}
const fetchUsersFail=(error) =>{
    return {
        type:FETCH_USERS_FAIL,
        data:error
    }
}

const userreducer  = (state=initialState,action) => {
 

    switch(action.type){
        case "FETCH_USERS_REQUEST":
            return {...state,isLoading:true}
            case FETCH_USERS_SUCESS:
                return{isLoading:false,users:action.data,error}
                case FETCH_USERS_FAIL:
                    return{isLoading:false,users:[],error:action.data}
            default:
                return state;
    }

}
const fetchUsers = () =>{
    return function(dispatch){
        dispatch(fetchUsersRequest());
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(Response =>{
            let users = Response.data
            dispatch(fetchUsersSucess(users))

        })
        .catch(error=>{
            dispatch(fetchUsersFail(error));
        })
    }
}

const store = createStore(userreducer,applyMiddleware(thunk));
store.subscribe(()=> {console.log(store.getState())})
store.dispatch(fetchUsers());

