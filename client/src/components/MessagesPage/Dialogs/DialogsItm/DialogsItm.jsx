import React from "react";
import css from './DialogsItm.module.css';
import avatar from '../../../../assets/images/avatar.jpg';
import DeleteBtnContainer from "./DeleteBtn/DeleteBtnContainer";

const DialogsItm = props => {
    const isHover = props.isHover;
    return (
        <div className={css.dialogsItm + ' ' + (isHover ? css.hover :'')}
             onMouseEnter={props.toggleHover}
             onMouseLeave={props.toggleHover}
        >
            <img src={avatar} className={css.avatar}/>
            <div className={css.dialogWrap}>
                <div className={css.dialogInfo}>
                    <div className={css.username}>Божена Бигун</div>
                    <div className={css.date}>20.08.2020 в 12:53</div>
                </div>
                <p className={css.message}>Бла бла бла, я хомяк!</p>
            </div>
            {isHover ? <DeleteBtnContainer/> : null}
        </div>
    )
}

export default DialogsItm;