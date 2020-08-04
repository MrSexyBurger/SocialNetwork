import * as axios from 'axios';

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
    postPost(post){
        return instance.post('profile/posts', {post});
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