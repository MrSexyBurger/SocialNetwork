import React from "react";
import css from './PageMenuBtn.module.css';
import {changeCurrentBlock} from "../../../../redux/dialogs_reducer";


const PageMenuBtn = props => {
    const isHover = props.isHover;
    const isActive = props.isActive;

    return (
        <button className={css.menuBtn + ' ' + (isHover ? css.hover : '') + ' ' + (isActive ? css.active : '')}
                onMouseEnter={props.toggleHover}
                onMouseLeave={props.toggleHover}
                onClick={props.changeCurrentBlock(props.blockName)}
        >{props.btnName}</button>
    )
}

export default PageMenuBtn;