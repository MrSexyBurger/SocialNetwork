import React from "react";
import css from "./UsernameLink.module.css";
import {NavLink} from "react-router-dom";

const UsernameLink = props => {
    const isHover = props.isHover;
    let username = props.username.split(' ');
    username = username[0];

    let author = props.author;

    return (
        <div className={css.usernameWrap}
             onMouseEnter={props.toggleHover}
             onMouseLeave={props.toggleHover}
        >
            <NavLink to={`/profile/${author}`} className={css.username + ' ' + (isHover ? css.hover : '') }>{username}</NavLink>
        </div>
    )
}

export default UsernameLink;