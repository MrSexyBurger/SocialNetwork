import React from "react";
import css from "./ProfileInfo.module.css";
import ProfileShort from "./ProfileInfoItems/ProfileShort";
import Summary from "./Summary/Summary";
import ShowMoreBtnContainer from "./ShowMoreBtn/ShowMoreBtnContainer";
import ProfileFullContainer from "./ProfileInfoItems/ProfileFullContainer";
import ProfileInfoHeader from "./ProfileInfoHeader/ProfileInfoHeader";

const ProfileInfo = (props) => {
    return (
        <div className={css.profileInfoWrap}>
            <ProfileInfoHeader info={props.info}/>
            <ProfileShort info={props.info}/>
            <ShowMoreBtnContainer/>
            <ProfileFullContainer info={props.info}/>
            <Summary/>
        </div>
    )
}

export default ProfileInfo;