import React from "react";
import css from './ActionBtns.module.css';

const SendMessageBtn = props => {
    return (
        <button className={css.sendGiftBtn + ' ' + (props.isHover ? css.hover : ' ')}
                onMouseEnter={props.toggleHover}
                onMouseLeave={props.toggleHover}
        />
    )
}

export default SendMessageBtn;