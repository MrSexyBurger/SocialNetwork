import React from "react";
import {profileApi} from "../api/api";
import {reset} from 'redux-form';


const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SET_STATUS_EDIT = 'SET_STATUS_EDIT';
const SET_POSTS = 'SET_POSTS';
const PUSH_NEW_POST = 'PUSH_NEW_POST';
const DELETE_POST = 'DELETE_POST';
const SET_GUEST = 'SET_GUEST';
const SET_INFO = 'SET_INFO';
const SET_ONLINE = 'SET_ONLINE';

let initialState = {
    info: null,
    status: null,
    guest: false,
    statusEdit: false,
    fullInfo: false,
    posts: null,
    friendsShort: null,
    online: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE: {
            return {
                ...state,
                info: action.info,
                status: action.status,
                posts: action.posts,
                friendsShort: action.friendsShort
            }
        }
        case SET_ONLINE: {

            if (action.online !== null) {
                return {
                    ...state,
                    online: action.online
                }
            }

            if (action.offlineId !== null) {
                if (state.info.userId === action.offlineId) {
                    return {
                        ...state,
                        online: false
                    }
                }
            }

            if ( (action.onlineId !== null) && (action.onlineId ===  state.info.userId) ) {
                return {
                    ...state,
                    online: true
                }
            }


        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
                statusEdit: false
            }
        }
        case SET_STATUS_EDIT: {
            return {
                ...state,
                statusEdit: action.statusEdit
            }
        }
        case SET_POSTS: {
            return {
                ...state,
                posts: action.posts
            }
        }
        case SET_GUEST: {
            return {
                ...state,
                guest: action.guest
            }
        }
        case SET_INFO: {
            let stateCopy = {...state}
            stateCopy.fullInfo = !stateCopy.fullInfo;
            return stateCopy;
        }
        case PUSH_NEW_POST: {
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(action.post)
            return stateCopy
        }
        case DELETE_POST: {
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts = stateCopy.posts.filter(post => post._id !== action.postId);
            return stateCopy;
        }
        default:
            return state;
    }
}

export const setUserProfile = (profile, guest) => (
    {
        type: SET_USER_PROFILE,
        info: profile.data.info,
        status: profile.data.status,
        posts: profile.data.posts,
        friendsShort: profile.data.friendsShort
    });
export const setStatus = (status) => ({type: SET_STATUS, status});
export const setStatusEdit = (statusEdit) => ({type: SET_STATUS_EDIT, statusEdit});
export const setPosts = (posts) => ({type: SET_POSTS, posts});
export const setGuest = (guest) => ({type: SET_GUEST, guest});
export const setFullInfo = () => ({type: SET_INFO});
export const setOnline = (online, offlineId, onlineId) => ({type: SET_ONLINE, online, offlineId, onlineId});
export const addNewPost = (post) => ({type: PUSH_NEW_POST, post});
export const delPost = (postId) => ({type: DELETE_POST, postId});

export const getUserProfile = (userId) => (dispatch) => {
    profileApi.profile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        })
}

export const updateOnline = (online, offlineId, onlineId) =>  (dispatch) => {
    dispatch(setOnline(online, offlineId, onlineId));
}

export const updateStatus = (status) => (dispatch) => {
    profileApi.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        })
}

export const updateStatusEdit = (edit) => (dispatch) => () => {
    dispatch(setStatusEdit(edit));
}

export const updateGuest = (guest) => (dispatch) => {
    dispatch(setGuest(guest));
}

export const toggleFullInfo = () => (dispatch) => {
    dispatch(setFullInfo());
}


export const getPosts = (userId) => (dispatch) => {
    console.log('getPostWorks')
    profileApi.getPosts(userId)
        .then(response => {
            dispatch(setPosts(response.data.posts));
        })
}

export const postPost = (post, reciever) => (dispatch) => {
    profileApi.postPost(post, reciever)
        .then(response => {
            if(response.data.resultCode === 0){
                dispatch(addNewPost(response.data.post))
                dispatch(reset('post'));
            }
        })
}

export const deletePost = (postId) => (dispatch) => {
    profileApi.deletePost(postId)
        .then(response => {
            if(response.data.resultCode === 0){
                dispatch(delPost(postId));
            }
        })
}

export default profileReducer;