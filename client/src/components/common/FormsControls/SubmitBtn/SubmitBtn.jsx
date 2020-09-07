import React from "react";
import css from './SubmitBtn.module.css';

const SubmitBtn = props => {
    const isHover = props.isHover;

    return <button className={css.submitBtn + ' ' + (isHover ? css.hover : '') }
                   onMouseEnter={props.toggleHover}
                   onMouseLeave={props.toggleHover}
    >Сохранить</button>
}

export default SubmitBtn;