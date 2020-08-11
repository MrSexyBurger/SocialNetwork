import React from "react";
import css from './FriendsShortItm.module.css';
import {NavLink} from "react-router-dom";

const FriendsShortItm = props => {
    const isHover = props.isHover;
    let username = props.username.split(' ');
    username = username[0]
    return (
        <div className={ css.friendsShortWrap + ' ' + (isHover ? css.hover : '')}
             onMouseEnter={props.toggleHover}
             onMouseLeave={props.toggleHover}
        >
            <NavLink to={`/profile/${props.userId}`}>
                <img src={props.avatar} className={css.avatar}/>
                <div className={css.username}>{username}</div>
            </NavLink>
        </div>
    )
}

export default FriendsShortItm;