import React from "react";
import css from "./ProfileInfo.module.css";
import ProfileInfoItems from "./ProfileInfoItems/ProfileShort";
import Status from "./Status/Status";
import StatusContainer from "./Status/StatusContainer";

const ProfileInfo = (props) => {

    const profile = props.profile;
    const status = props.status;

    return (
        <div className={css.profileInfoWrap}>
            <div className={css.usernameAndStatusWrap}>
                <div className={css.userNameWrap}>
                    <div className={css.userName}>{profile ? profile.username : ''}</div>
                    <div className={css.online}>online</div>
                </div>
                <StatusContainer status={status ? status : ''} />

            </div>
            <div className={css.infoWrap}>
                <ProfileInfoItems profile={profile} />
                <button className={css.showMoreBtn}>Показать подробную информацию</button>
            </div>
            <div className={css.summary}>
                <div className={css.summaryItm}>
                    <div className={css.summaryNumber}>1714</div>
                    <div className={css.summaryLabel}>друга</div>
                </div>
                <div className={css.summaryItm}>
                    <div className={css.summaryNumber}>666</div>
                    <div className={css.summaryLabel}>подписчиков</div>
                </div>
                <div className={css.summaryItm}>
                    <div className={css.summaryNumber}>312</div>
                    <div className={css.summaryLabel}>фотографий</div>
                </div>
                <div className={css.summaryItm}>
                    <div className={css.summaryNumber}>100</div>
                    <div className={css.summaryLabel}>видеозаписей</div>
                </div>
                <div className={css.summaryItm}>
                    <div className={css.summaryNumber}>37</div>
                    <div className={css.summaryLabel}>подарков</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;