import React from "react";
import css from './ActionBtn.module.css';

const ActionBtn = props => {
    return (
        <button className={css.actionBtn + ' ' + (props.isHover ? css.hover : '')}
                onMouseEnter={props.toggleHover}
                onMouseLeave={props.toggleHover}
        >{props.actionName}</button>
    )
}

export default ActionBtn;