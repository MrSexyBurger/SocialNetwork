import React from "react";
import css from './MessagesItm.module.css';
import avatar from '../../../../assets/images/avatar.jpg';
import {NavLink} from "react-router-dom";
import UsernameLinkContainer from "./UsernameLink/UsernameLinkContainer";

const MessagesItm = props => {
    return (
        <div className={css.messagesItm}>
            <NavLink to={`/profile/userId`}>
                <img src={avatar} className={css.avatar}/>
            </NavLink>
            <div className={css.messageWrap}>
                <div className={css.messageInfo}>
                    <UsernameLinkContainer/>
                    <div className={css.date}>18.08.2020 в 18:19</div>
                </div>
                <p className={css.messageBody}>Сообщение от недовольной квокки!</p>
            </div>
        </div>
    )
}

export default MessagesItm;