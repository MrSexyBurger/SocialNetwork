import React from "react";
import {profileApi} from "../api/api";
import {delPost} from "./profile_reducer";

const SET_EDIT_SECTION = 'SET_EDIT_SECTION';
const SET_EDIT_SAVING = 'SET_EDIT_SAVING';
const SET_EDIT_INFO = 'SET_EDIT_INFO';

let initialState = {
    currentSection: 'info',
    saving: false,
    info: null
}

const editReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_EDIT_SECTION: {
            return {
                ...state,
                currentSection: action.section
            }
        }
        case SET_EDIT_INFO: {
            return {
                ...state,
                info: action.info
            }
        }
        default:
            return state;
    }
}


const setSection = section => ({type: SET_EDIT_SECTION, section});
const setSaving = saving => ({type: SET_EDIT_SAVING, saving});
const setInfo = info => ({type: SET_EDIT_INFO, info});

export const changeEditSection = section => dispatch => () => {
    dispatch(setSection(section));
}

export const saveInfo = info => dispatch => {
    dispatch(setSaving(true));
    profileApi.editInfo(info)
        .then(response => {
            if(response.data.resultCode === 0){
                dispatch(setSaving(false));
            }
        })
}

export const getEditInfo = () => dispatch => {
    profileApi.getInfo()
        .then(response => {
            if(response.data.resultCode === 0){
                dispatch(setInfo(response.data.info))
            }
        })
}



export default editReducer;