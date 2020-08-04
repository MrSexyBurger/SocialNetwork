import React from "react";
import css from './ToggleFriendBtn.module.css';
/*onClick={props.followUser(props.userId)*/
const ToggleFriendBtn = (props) => {
    const isFriend = props.state.isFriend;
    return (
        <button className={css.toggleFriendBtn + ' ' + (props.state.isHover ? css.hover : '') + ' ' + (isFriend ? css.del : '') }
                onMouseEnter={props.toggleHover}
                onMouseLeave={props.toggleHover}
                onClick={ isFriend ? props.unfollowUser : props.followUser}
        >{isFriend ? 'Удалить из друзей' : 'Добавить в друзья'}</button>
    )
}

export default ToggleFriendBtn;