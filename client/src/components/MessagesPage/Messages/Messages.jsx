import React from "react";
import css from './Messages.module.css';
import BackBtnContainer from "../BackBtn/BackBtnContainer";
import {NavLink} from "react-router-dom";
import MessageFormContainer from "./MessageForm/MessageFormContainer";
import MessagesItmContainer from "./MessagesItm/MessagesItmContainer";

const Messages = props => {
    let userInfo = props.userInfo;
    let messages = props.messages;

    messages = messages.map(message => {
        return <MessagesItmContainer message={message.text}
                                     author={message.author}
                                     date={message.date}
        />;
    })

    return (
        <div className={css.messagesWrap}>
            <div className={css.messagesHeader}>
                <BackBtnContainer/>
                <NavLink className={css.dialogUserLink} to={`/profile/${userInfo.id}`}>
                    <div className={css.dialogUsername}>{userInfo.username}</div>
                    <div className={css.onlineStatus}>online</div>
                </NavLink>
                <div className={css.dialogUserActionsWrap}>
                    <img className={css.avatar} src={userInfo.avatar}/>
                </div>
            </div>
            <div className={css.messagesItms}>
                {messages}
            </div>
            <MessageFormContainer/>
        </div>
    )
}

export default Messages;