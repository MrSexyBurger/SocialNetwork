import React from "react";
import css from './DialogsItm.module.css';
import DeleteBtnContainer from "./DeleteBtn/DeleteBtnContainer";

const DialogsItm = props => {
    const isHover = props.isHover;
    const dialog = props.dialog;
    const message = dialog.message;
    let date = null;

    if (message) {
        date = message.date.split(' ');
        date = `${date[0]} в ${date[1]}`;
    }


    return (
        <div className={css.dialogsItm + ' ' + (isHover ? css.hover :'')}
             onMouseEnter={props.toggleHover}
             onMouseLeave={props.toggleHover}
             onClick={props.getDialog(dialog._id)}
        >
            <img src={dialog.avatar} className={css.avatar}/>
            <div className={css.dialogWrap}>
                <div className={css.dialogInfo}>
                    <div className={css.username}>{dialog.username}</div>
                    <div className={css.date}>{date}</div>
                </div>
                <p className={css.message}>{message ? message.text : 'Сообщений пока нет...'}</p>
            </div>
            {isHover ? <DeleteBtnContainer dialogId={props.dialog._id} /> : null}
        </div>
    )
}

export default DialogsItm;