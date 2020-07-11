import React from "react";
import css from "./ProfilePage.module.css";
import AvatarContainer from "./Avatar/AvatarContainer";


const ProfilePage = (props) => {

    if (!props.profile) {
        console.log('загрузка')
    } else {
        console.log('загрузка завершена')
    }

    return (
        <div className={css.pageWrap}>
            <div className={css.pageL}>
                <AvatarContainer avatar={props.profile ? props.profile.avatar.big : ' '}/>
            </div>
            <div className={css.pageR}>

            </div>
        </div>
    )
}

export default ProfilePage;