import React from "react";
import css from './DeleteBtn.module.css';

const DeleteBtn = props => {
    const isHover = props.isHover;
    return (
        <button className={css.deleteBtn + ' ' + (isHover ? css.hover : '')}
                onMouseEnter={props.toggleHover}
                onMouseLeave={props.toggleHover}
        >
            X
        </button>
    )
}

export default DeleteBtn;