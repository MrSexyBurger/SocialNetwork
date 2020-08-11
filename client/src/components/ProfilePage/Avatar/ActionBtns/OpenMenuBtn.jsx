import React from "react";
import css from './ActionBtns.module.css';

const OpenMenuBtn = props => {
    return (
        <button className={css.menuBtn + ' ' + (props.isHover ? css.hover : ' ')}
                onClick={props.toggleMenu}
                onMouseEnter={props.toggleHover}
                onMouseLeave={props.toggleHover}
        >
            <span className={css.dot}/>
            <span className={css.dot}/>
            <span className={css.dot}/>
        </button>
    )
}

export default OpenMenuBtn;