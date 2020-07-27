import React from "react";
import {profileApi} from "../api/api";
import {reset} from 'redux-form';


const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SET_STATUS_FORM = 'SET_STATUS_FORM';
const SET_POSTS = 'SET_POSTS';
const PUSH_NEW_POST = 'PUSH_NEW_POST';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    profile: null,
    status: null,
    statusForm: false,
    posts: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_STATUS_FORM: {
            return {
                ...state,
                statusForm: action.statusForm
            }
        }
        case SET_POSTS: {
            return {
                ...state,
                posts: action.posts
            }
        }
        case PUSH_NEW_POST: {
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(action.post)
            return stateCopy
        }
        case DELETE_POST: {
            console.log('ok')
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts = stateCopy.posts.filter(post => post._id != action.postId);
            return stateCopy;
        }
        default:
            return state;
    }
}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const setStatusForm = (statusForm) => ({type: SET_STATUS_FORM, statusForm});
export const setPosts = (posts) => ({type: SET_POSTS, posts});
export const addNewPost = (post) => ({type: PUSH_NEW_POST, post} )
export const delPost = (postId) => ({type: DELETE_POST, postId})

export const getUserProfile = (userId) => (dispatch) => {
    profileApi.profile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        })
}

export const getStatus = (userId) => (dispatch) => {
    profileApi.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        })
}

export const updateStatus = (status) => (dispatch) => {
    profileApi.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
                dispatch(setStatusForm(false))
            }
        })
}

export const toggleStatusForm = (open) => (dispatch) => {
    dispatch(setStatusForm(open));
}

export const getPosts = (userId) => (dispatch) => {
    profileApi.getPosts(userId)
        .then(response => {
            dispatch(setPosts(response.data.posts));
        })
}

export const postPost = (post) => (dispatch) => {
    profileApi.postPost(post)
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