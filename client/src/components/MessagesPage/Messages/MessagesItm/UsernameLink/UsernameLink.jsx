import React from "react";
import css from "./UsernameLink.module.css";
import {NavLink} from "react-router-dom";

const UsernameLink = props => {
    const isHover = props.isHover;
    return (
        <div className={css.usernameWrap}
             onMouseEnter={props.toggleHover}
             onMouseLeave={props.toggleHover}
        >
            <NavLink to={`/profile/userId`} className={css.username + ' ' + (isHover ? css.hover : '') }>Божена</NavLink>
        </div>
    )
}

export default UsernameLink;