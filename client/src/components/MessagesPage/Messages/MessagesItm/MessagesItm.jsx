import React from "react";
import css from './MessagesItm.module.css';
import avatar from '../../../../assets/images/avatar.jpg';
import {NavLink} from "react-router-dom";
import UsernameLinkContainer from "./UsernameLink/UsernameLinkContainer";

const MessagesItm = props => {
    let date = props.date.split(' ');
    date = `${date[0]} в ${date[1]}`

    let author = props.author;
    let username = props.username;
    let message = props.message;
    let avatar = props.avatar;

    return (
        <div className={css.messagesItm}>
            <NavLink to={`/profile/${author}`}>
                <img src={avatar} className={css.avatar}/>
            </NavLink>
            <div className={css.messageWrap}>
                <div className={css.messageInfo}>
                    <UsernameLinkContainer username={username} author={author}/>
                    <div className={css.date}>{date}</div>
                </div>
                <p className={css.messageBody}>{message}</p>
            </div>
        </div>
    )
}

export default MessagesItm;