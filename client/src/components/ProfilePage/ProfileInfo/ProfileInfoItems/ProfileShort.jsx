import React from "react";
import css from "./ProfileShortFull.module.css";
import {calculateAge} from "../../../../common/calculateAge";

const ProfileShort = (props) => {
    let info = props.info;

    let school = info.education.school;
    let university = info.education.university;
    let education;

    if (university.length > 0){
        education = university;
    } else if (school.length > 0) {
        education = school;
    }

    return (
        <div className={css.infoShortWrap}>

            <div className={css.infoItm}>
                <div className={css.label}>День рождения:</div>
                <div className={css.labeled}>{`${info.birth} г. (${calculateAge(info.birth)})`}</div>
            </div>

            {info.location.city.length > 0 &&
                <div className={css.infoItm}>
                    <div className={css.label}>Город:</div>
                    <div className={css.labeled}>{ info.location.city }</div>
                </div>
            }

            {education &&
                <div className={css.infoItm}>
                    <div className={css.label}>Образование:</div>
                    <div className={css.labeled}>{education}</div>
                </div>
            }


        </div>
    )
}

export default ProfileShort;