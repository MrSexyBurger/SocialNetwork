import React from "react";
import {usersApi} from "../api/api";


const SET_USERS = 'SET_USERS';
const PUSH_NEW_FRIEND = 'PUSH_NEW_FRIEND';
const PULL_NEW_FRIEND = 'PULL_NEW_FRIEND';
const SET_USERS_SECTION = 'SET_USERS_SECTION';
const SET_LOADING = 'SET_LOADING';

let initialState = {
    users: null,
    extSearch: false,
    currentSection: 'friends',
    isLoading: false
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users,
            }
        case SET_USERS_SECTION: {
            return {
                ...state,
                currentSection: action.section
            }
        }

        case PUSH_NEW_FRIEND: {

            let users = [...state.users];
            let userData, userIndex;

            users.forEach((user, index) => {
                if (user.id == action.userId) {
                    userData = user;
                    userIndex = index;
                }
            })

            users[userIndex].friends = [...users[userIndex].friends];
            users[userIndex].friends.push(action.authId);

            return {
                ...state,
                users: users
            }
        }

        case PULL_NEW_FRIEND: {
            let users = [...state.users];
            let userData, userIndex;

            users.forEach((user, index) => {
                if (user.id == action.userId) {
                    userData = user;
                    userIndex = index;
                }
            })

            users[userIndex].friends = [...users[userIndex].friends];
            users[userIndex].friends = users[userIndex].friends.filter(value => {
                return value != action.authId
            });

            return {
                ...state,
                users: users
            }
        }
        case SET_LOADING: {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default:
            return {...state}
    }
}

const setUsers = (users) => ({type: SET_USERS, users});
const pushFriend = (userId, authId) => ({type: PUSH_NEW_FRIEND, userId, authId})
const pullFriend = (userId, authId) => ({type: PULL_NEW_FRIEND, userId, authId})
const setSection = (section) => ({type: SET_USERS_SECTION, section});
const setLoading = (isLoading) => ({type: SET_LOADING, isLoading});

export const getUsers = (section) => (dispatch) => {
    dispatch(setSection(section));
    dispatch(setLoading(true));
    dispatch(setUsers(null))
    usersApi.getUsers(section)
        .then(response => {
            dispatch(setUsers(response.data.users));
            dispatch(setLoading(false));
        })
}

export const followUser = (userId, authId) => (dispatch) => {
    usersApi.follow(userId)
        .then(response => {
            dispatch(pushFriend(userId, authId));
        })
}

export const unfollowUser = (userId, authId) => (dispatch) => {
    usersApi.unfollow(userId)
        .then(response => {
            dispatch(pullFriend(userId, authId));
        })
}

export default usersReducer;