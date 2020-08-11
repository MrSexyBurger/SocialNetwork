import React from "react";
import css from "./ProfilePage.module.css";
import AvatarContainer from "./Avatar/AvatarContainer";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";

import PostFormContainer from "./Posts/PostForm/PostFormContainer";
import PostsContainer from "./Posts/PostsContainer";
import FriendsShortContainer from "./FriendsShort/FriendsShortContainer";


const ProfilePage = (props) => {

    const profile = props.profile ? props.profile : null;

    return (
        <div className={css.pageWrap}>
            <div className={css.pageL}>
                <AvatarContainer/>
                <FriendsShortContainer/>
            </div>
            <div className={css.pageR}>
                <ProfileInfoContainer/>
                <PostFormContainer/>
                <PostsContainer/>
            </div>
        </div>
    )
}

export default ProfilePage;