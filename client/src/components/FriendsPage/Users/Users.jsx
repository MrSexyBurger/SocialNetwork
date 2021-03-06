import css from "./Users.module.css";
import {calculateAge} from "../../../common/calculateAge";
import ToggleFriendBtnContainer from "../ToggleFriendBtn/ToggleFriendBtnContainer";
import React from "react";
import Loader from "../../common/Loaders/Loader";
import {NavLink} from "react-router-dom";


const Users = props => {
    let users = props.users;
    let isEmpty = users && users.length === 0 ? true : false;
    const currentSection = props.currentSection;

    if (users){
        users = users.map(user => (
            <div className={css.userItm}>
                <NavLink to={`/profile/${user.id}`}><img className={css.avatarImg} src={user.avatar}/></NavLink>
                <div className={css.userInfo}>
                    <NavLink to={`/profile/${user.id}`} className={css.userName}>{user.username}</NavLink>
                    <div className={css.age}>{calculateAge(user.birthDate)}</div>
                </div>
                <ToggleFriendBtnContainer userId={user.id} friends={user.friends}/>
            </div>
        ))
    }

    if(isEmpty) {
        switch (currentSection) {
            case 'friends': {
                users = <div className={css.empty}>У вас пока нет друзей</div>;
                break;
            }
            case 'find': {
                users = <div className={css.empty}>Список пользователей пуст</div>;
                break;
            }
            default:
                break;
        }
    }

    return (
        <div className={css.usersWrap}>
            {props.isLoading ?  <Loader/> : null}
            {users}
        </div>
    )
}

export default Users;