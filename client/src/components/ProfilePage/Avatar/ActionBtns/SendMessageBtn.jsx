import React from "react";
import css from './ActionBtns.module.css';

const SendMessageBtn = props => {
    return (
        <button className={css.sendMessageBtn + ' ' + (props.isHover ? css.hover : ' ')}
                onMouseEnter={props.toggleHover}
                onMouseLeave={props.toggleHover}
        >Написать сообщение</button>
    )
}

export default SendMessageBtn;