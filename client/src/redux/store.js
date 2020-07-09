import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk'
import authReducer from "./auth_reducer";
import {reducer} from "redux-form";

let reducers = combineReducers({
    auth: authReducer,
    form: reducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;