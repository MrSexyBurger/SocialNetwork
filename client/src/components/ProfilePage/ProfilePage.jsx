import React from "react";
import css from "./ProfilePage.module.css";
import AvatarContainer from "./Avatar/AvatarContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const ProfilePage = (props) => {

    return (
        <div className={css.pageWrap}>
            <div className={css.pageL}>
                <AvatarContainer guest={props.guest} avatar={props.profile ? props.profile.avatar.big : ' '}/>
            </div>
            <div className={css.pageR}>
                <ProfileInfo guest={props.guest} profile={props.profile} status={props.status}/>
            </div>
        </div>
    )
}

export default ProfilePage;