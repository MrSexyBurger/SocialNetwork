import React from "react";
import css from './FriendsShort.module.css';
import FriendsShortItmContainer from "./FriendsShortItm/FriendsShortItmContainer";

const FriendsShort = props => {

    const friends = props.friends && props.friends.map(friend => {
        return <FriendsShortItmContainer userId={friend.userId}
                                         avatar={friend.avatar}
                                         username={friend.username}
        />
    });

    return (
        <div className={css.friendsShortWrap}>
            <div className={css.friendsShortHeader}>
                <div className={css.labelWrap}>
                    <div className={css.label}>Друзья</div>
                    <div className={css.friendsCount}>{props.count}</div>
                </div>
            </div>
            {friends && friends.length > 0 && <div className={css.friendsItmsWrap}>{friends}</div>}
        </div>
    )
}

export default FriendsShort;