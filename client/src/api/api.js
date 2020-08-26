import * as axios from 'axios';
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:9000');

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:9000/'
});

export const authAPI = {
    me(){
        return instance.get('auth/me');
    },
    login(email, password, rememberMe = false){
        return instance.post('auth/login', {email, password, rememberMe});
    },
    logout(email, password, rememberMe = false){
        return instance.delete(`auth/logout`);
    },
    reg(username, email, password, gender, birth){
        return instance.put('auth/registration', {username, email, password, gender, birth});
    }
}

export const profileApi = {
    profile(userId){
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId){
      return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status){
        return instance.put('profile/status', {status});
    },
    getPosts(userId){
        return instance.get(`profile/posts/${userId}`);
    },
    postPost(post, userId){
        return instance.post('profile/posts', {post, userId});
    },
    updatePost(post){
        return instance.put('profile/posts', {post});
    },
    deletePost(postId){
        return instance.delete(`profile/posts/${postId}`);
    }
}

export const usersApi = {
    getUsers(section){
        return instance.get(`users?section=${section}`);
    },
    follow(userId){
        return instance.put('follow', {userId})
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
    }
}

export const dialogsApi = {
    getDialogs(){
      return instance.get('/dialogs');
    },
    getDialog(dialogId){
        return instance.get(`/dialogs/getDialog/${dialogId}`);
    },
    getNewDialogs(){
        return instance.get('/dialogs/newDialogs');
    },
    postDialog(recipientId){
        return instance.post('/dialogs/postDialog', {recipientId});
    },
    putMessage(dialogId, recipientId, message){
        return instance.put('/dialogs/putMessage', {dialogId, recipientId, message})
    }
}

//работа с сокетами

export const newVisitor = (username, avatar, id) => {
    //socket.on('visitors', visitors => console.log(visitors));
    socket.emit('new visitor', {id, username, avatar});
}

export const emitUserOnline = (id) => {
    socket.emit('isUserOnline', id);
}

export const userOnlineStatus = (callback) => {
    socket.on('isUserOnline', online => callback(online, null, null) );
    socket.on('userDisconnected', offlineId => callback(null, offlineId));
    socket.on('newUserOnline', onlineId => callback(null, null, onlineId))
}

