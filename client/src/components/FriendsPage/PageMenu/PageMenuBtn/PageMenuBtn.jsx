import React from "react";
import css from './PageMenuBtn.module.css';


const PageMenuBtn = props => {
    const isHover = props.state.isHover;
    const isActive = props.state.isActive;
    return (
        <button className={css.menuBtn + ' ' + (isHover ? css.hover : '') + ' ' + (isActive ? css.active : '')}
                onMouseEnter={props.toggleHover}
                onMouseLeave={props.toggleHover}
                onClick={props.changeSection}
        >{props.state.btnName}</button>
    )
}

export default PageMenuBtn;