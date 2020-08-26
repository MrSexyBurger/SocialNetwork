import React from "react";
import {reset} from 'redux-form';
import {dialogsApi} from "../api/api";


const SET_NEW_DIALOGS = 'SET_NEW_DIALOGS';
const SET_DIALOGS = 'SET_DIALOGS';
const SET_DIALOG = 'SET_DIALOG';
const PUSH_MESSAGE = 'PUSH_MESSAGE';
const SET_BLOCK = 'SET_BLOCK';

let initialState = {
    currentBlock: 'dialogs',
    newDialogs: [],
    dialogs: [],
    dialogId: null,
    userInfo: null,
    messages: null
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEW_DIALOGS: {
            return {
                ...state,
                newDialogs: action.newDialogs
            }
        }
        case SET_DIALOGS: {
            return {
                ...state,
                dialogs: action.dialogs
            }
        }
        case SET_DIALOG: {
            return {
                ...state,
                currentBlock: 'messages',
                dialogId: action.dialogId,
                userInfo: action.userInfo,
                messages: action.messages
            };
        }
        case PUSH_MESSAGE: {
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(action.message);
            return stateCopy;
        }
        case SET_BLOCK: {
            return {
                ...state,
                currentBlock: action.block
            }
        }
        default:
            return state
    }

}


export const setNewDialogs = (newDialogs) => ({type: SET_NEW_DIALOGS, newDialogs});
export const setDialogs = (dialogs) => ({type: SET_DIALOGS, dialogs});
export const setDialog = (dialogId, userInfo, messages) => ({type: SET_DIALOG, dialogId, userInfo, messages});
export const pushMessage = (message) => ({type: PUSH_MESSAGE, message});
export const setBlock = (block) => ({type: SET_BLOCK, block});


export const getDialogs = () => (dispatch) => {
    dialogsApi.getDialogs()
        .then(response => {
            dispatch(setDialogs(response.data.dialogs));
        })
}

export const getDialog = (dialogId) => (dispatch) => () => {
    dialogsApi.getDialog(dialogId)
        .then(response => {
            //console.log(response.data);
            dispatch(setDialog(response.data.dialogId, response.data.userInfo, response.data.messages));
        })
}

export const getNewDialogs = () => (dispatch) => {
    dialogsApi.getNewDialogs()
        .then(response => {
            dispatch(setNewDialogs(response.data));
        })
}

export const createDialog = (recipientId) => (dispatch) => () => {
    dialogsApi.postDialog(recipientId)
        .then(response => {
            dispatch(setDialog(response.data.dialogId, response.data.userInfo, response.data.messages));
        })
}

export const putMessage = (dialogId, recipientId, message) => (dispatch) => {
    dialogsApi.putMessage(dialogId, recipientId, message)
        .then(response => {
            dispatch(pushMessage(response.data.message));
            dispatch(reset('message'));
        })
}

export const setCurrentBlock = (block) => (dispatch) => () => {
    dispatch(setBlock(block));
}




export default dialogsReducer;