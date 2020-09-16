import React from "react";
import {reset} from 'redux-form';
import {dialogsApi, emitNewDialog, emitNewMessage} from "../api/api";


const SET_NEW_DIALOGS = 'SET_NEW_DIALOGS';
const SET_DIALOGS = 'SET_DIALOGS';
const SET_DIALOG = 'SET_DIALOG';
const PUSH_MESSAGE = 'PUSH_MESSAGE';
const SET_BLOCK = 'SET_BLOCK';
const DELETE_DIALOG = 'DELETE_DIALOG';

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
        case DELETE_DIALOG: {
            let stateCopy = {...state};
            stateCopy.dialogs = [...state.dialogs];
            stateCopy.dialogs = stateCopy.dialogs.filter(dialog => dialog._id !== action.dialogId);
            return stateCopy;
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



const setNewDialogs = (newDialogs) => ({type: SET_NEW_DIALOGS, newDialogs});
const setDialogs = (dialogs) => ({type: SET_DIALOGS, dialogs});
const setDialog = (dialogId, userInfo, messages) => ({type: SET_DIALOG, dialogId, userInfo, messages});
const pushMessage = (message) => ({type: PUSH_MESSAGE, message});
const setBlock = (block) => ({type: SET_BLOCK, block});
const delDialog = (dialogId) => ({type: DELETE_DIALOG, dialogId})

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

            let messageObj = {
                dialogId: response.data.dialogId,
                userInfo: response.data.userInfo,
                messages: response.data.messages
            }

        })
}

export const deleteDialog = (dialogId) => (dispatch) => {
    dialogsApi.deleteDialog(dialogId)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(delDialog(dialogId));
            }
        })
}

export const putMessage = (dialogId, recipientId, message) => (dispatch) => {
    dialogsApi.putMessage(dialogId, recipientId, message)
        .then(response => {
            dispatch(pushMessage(response.data.message));
            dispatch(reset('message'));

            let messageObj = {
                dialogId,
                message: response.data.message
            }

            emitNewMessage(messageObj);
        })
}


export const putNewMessage = (message) => (dispatch) => {
    dispatch(pushMessage(message.message))
}


export const changeCurrentBlock = (block) => (dispatch) => () => {
    dispatch(setBlock(block));
}




export default dialogsReducer;