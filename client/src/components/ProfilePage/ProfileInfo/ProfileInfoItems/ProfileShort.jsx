import React from "react";
//import css from "../ProfileInfo.module.css";
import css from  "./ProfileShort.module.css";

const ProfileShort = (props) => {

    const profile = props.profile;

    return (

        <div className={css.shortInfo}>

            <div className={css.shortInfoItm}>
                <div className={css.label}>День рождения:</div>
                <div className={css.labeled}>{profile ? `${profile.birth} г.` : ''}</div>
            </div>

            {profile && profile.location.city ?
                <div className={css.shortInfoItm}>
                    <div className={css.label}>Город:</div>
                    <div className={css.labeled}>{ profile.location.city }</div>
                </div>
                : null
            }

            {profile && profile.family ?
                <div className={css.shortInfoItm}>
                    <div className={css.label}>Семейное положение:</div>
                    <div className={css.labeled}>{profile.family}</div>
                </div>
                : null
            }

            {profile && profile.education ?
                <div className={css.shortInfoItm}>
                    <div className={css.label}>Образование:</div>
                    <div className={css.labeled}>{profile.education}</div>
                </div>
                : null
            }

        </div>
    )
}

export default ProfileShort;