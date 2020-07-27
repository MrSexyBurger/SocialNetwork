import React from "react";
import css from "./ProfilePage.module.css";
import AvatarContainer from "./Avatar/AvatarContainer";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";
import PostsContaner from "./Posts/PostsContaner";


const ProfilePage = (props) => {

    const profile = props.profile ? props.profile : null;

    return (
        <div className={css.pageWrap}>
            <div className={css.pageL}>
                <AvatarContainer guest={props.guest} avatar={profile ? profile.avatar.big : ' '}/>
            </div>
            <div className={css.pageR}>
                <ProfileInfoContainer guest={props.guest} profile={profile} status={props.status}/>
                <PostsContaner guest={props.guest}
                               posts={props.posts}
                               userName={profile ? profile.username : ''}
                               avatar={profile ? profile.avatar.small : ''}
                />
            </div>
        </div>
    )
}

export default ProfilePage;