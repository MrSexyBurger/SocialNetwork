import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk'
import authReducer from "./auth_reducer";
import {reducer} from "redux-form";
import profileReducer from "./profile_reducer";
import usersReducer from "./users_reducer";

let reducers = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    users: usersReducer,
    form: reducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;