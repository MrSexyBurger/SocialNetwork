import React from "react";
import css from './BackBtn.module.css';
import arrow from "../../../assets/images/arrow.svg";

const BackBtn = props => {
    let isHover = props.isHover;
    return (
        <button className={css.backToDialogsBtn + ' ' + (isHover ? css.hover : '')}
                onMouseEnter={props.toggleHover}
                onMouseLeave={props.toggleHover}
                onClick={props.changeCurrentBlock('dialogs')}
        >
            <img className={css.arrowImg} src={arrow}/>
            Назад
        </button>
    )
}

export default BackBtn;