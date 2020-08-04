import React from "react";
import css from "./ProfileInfo.module.css";
import ProfileShort from "./ProfileInfoItems/ProfileShort";
import StatusContainer from "./Status/StatusContainer";
import ProfileFull from "./ProfileInfoItems/ProfileFull";
import Summary from "./Summary/Summary";

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
                <ProfileShort profile={profile} />
                <button className={css.showMoreBtn + ' ' + ( props.state.isHover ? css.hover : '')}
                        onMouseEnter={props.toggleHover}
                        onMouseLeave={props.toggleHover}
                        onClick={props.toggleMenu}
                >{props.state.isOpened ? 'Скрыть' : 'Показать'} подробную информацию</button>
                {props.state.isOpened ? <ProfileFull profile={profile}/> : null}
            </div>
            {profile && profile.friends
                ? <Summary friends={profile.friends} />
                : null}
        </div>
    )
}

export default ProfileInfo;