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