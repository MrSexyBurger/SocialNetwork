import React from "react";
import css from "./ProfileInfoHeader.module.css";
import StatusContainer from "../Status/StatusContainer";

const ProfileInfoHeader = props => {
    return (
        <div className={css.profileInfoHeader}>
            <div className={css.userNameWrap}>
                <div className={css.userName}>{props.info.username}</div>
                <div className={css.online}>online</div>
            </div>
            <StatusContainer/>
        </div>
    )
}

export default ProfileInfoHeader;