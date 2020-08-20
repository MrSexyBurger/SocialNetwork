import React from "react";
import css from './SendMessageBtn.module.css'

const SendMessageBtn = props => {

    const isHover = props.isHover;

    return (
        <button className={css.sendMessageBtn + ' ' + (isHover ? css.hover : '')}
                onMouseEnter={props.toggleHover}
                onMouseLeave={props.toggleHover}
        >
            Отправить
        </button>
    )
}

export default SendMessageBtn;