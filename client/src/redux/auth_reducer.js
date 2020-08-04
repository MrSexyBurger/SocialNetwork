import React from "react";
import {authAPI} from "../api/api";


const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    avatar: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, avatar, isAuth) => (
    { type: SET_USER_DATA, payload: {userId, email, login, avatar, isAuth} });

export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0){
                let {id, login, email, avatar} = response.data.data;
                dispatch(setAuthUserData(id, email, login, avatar, true));
            }
        })
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password)
        .then(response => {
            if (response.data.resultCode === 0){
                dispatch(getAuthUserData());
            } else {
                let message = response.data.message.length > 0 ? response.data.message : 'Some error';
                //dispatch(stopSubmit('login', {_error: message}));
            }
        })
}

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
}

export const reg = (username, email, password, gender, birth) => (dispatch) => {
    authAPI.reg(username, email, password, gender, birth)
        .then( response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData());
            } else {
                console.log(response.data.message);
            }
        } )
}

export default authReducer;