import React from "react";
import css from './Messages.module.css';
import BackBtnContainer from "../BackBtn/BackBtnContainer";
import {NavLink} from "react-router-dom";
import avatar from "../../../assets/images/avatar.jpg";
import MessagesItm from "./MessagesItm/MessagesItm";
import MessageFormContainer from "./MessageForm/MessageFormContainer";

const Messages = props => {
    return (
        <div className={css.messagesWrap}>
            <div className={css.messagesHeader}>
                <BackBtnContainer/>
                <NavLink className={css.dialogUserLink} to={`/profile/userId`}>
                    <div className={css.dialogUsername}>Божена Бигун</div>
                    <div className={css.onlineStatus}>online</div>
                </NavLink>
                <div className={css.dialogUserActionsWrap}>
                    <img className={css.avatar} src={avatar}/>
                </div>
            </div>
            <div className={css.messagesItms}>
                <MessagesItm/>
                <MessagesItm/>
                <MessagesItm/>
            </div>
            <MessageFormContainer/>
        </div>
    )
}

export default Messages;