import React from "react";
import css from './PostFormBtn.module.css'

const PostFormBtn = props => {
    return (
        <button className={css.submitBtn + ' ' + (props.isHover ? css.hover : '')}
            onMouseEnter={props.toggleHover}
            onMouseLeave={props.toggleHover}
        >Опубликовать</button>
    )
}

export default PostFormBtn;