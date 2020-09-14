import React from "react";
import {profileApi} from "../api/api";


const SET_EDIT_SECTION = 'SET_EDIT_SECTION';
const SET_EDIT_SAVING = 'SET_EDIT_SAVING';
const SET_EDIT_INFO = 'SET_EDIT_INFO';
const SET_NEW_AVATAR_URL = 'SET_NEW_AVATAR_URL';

let initialState = {
    currentSection: 'info',
    saving: false,
    info: null,
    newAvatarUrl: null
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
        case SET_NEW_AVATAR_URL: {
            return {
                ...state,
                newAvatarUrl: action.newAvatarUrl
            }
        }

        case SET_EDIT_SAVING: {
            return {
                ...state,
                saving: action.saving
            }
        }

        default:
            return state;
    }
}


const setSection = section => ({type: SET_EDIT_SECTION, section});
const setSaving = saving => ({type: SET_EDIT_SAVING, saving});
const setInfo = info => ({type: SET_EDIT_INFO, info});
const setNewAvatarUrl = newAvatarUrl => ({type: SET_NEW_AVATAR_URL, newAvatarUrl});

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

export const updateNewAvatarUrl = newAvatarUrl => dispatch => {
    dispatch(setNewAvatarUrl(newAvatarUrl));
}

export const updateSaving = saving => dispatch => {
    dispatch(setSaving(saving))
}

export default editReducer;