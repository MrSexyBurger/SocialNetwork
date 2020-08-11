import React from "react";
import css from "./ProfileShortFull.module.css";
import {calculateAge} from "../../../../common/calculateAge";

const ProfileShort = (props) => {
    let info = props.info;

    return (
        <div className={css.infoShortWrap}>

            <div className={css.infoItm}>
                <div className={css.label}>День рождения:</div>
                <div className={css.labeled}>{`${info.birth} г. (${calculateAge(info.birth)})`}</div>
            </div>

            {info.location.city ?
                <div className={css.infoItm}>
                    <div className={css.label}>Город:</div>
                    <div className={css.labeled}>{ info.location.city }</div>
                </div>
                : null
            }

            {/*{info.family ?
                <div className={css.infoItm}>
                    <div className={css.label}>Семейное положение:</div>
                    <div className={css.labeled}>{info.family}</div>
                </div>
                : null
            }*/}

            {/*{info.education ?
                <div className={css.infoItm}>
                    <div className={css.label}>Образование:</div>
                    <div className={css.labeled}>{info.education}</div>
                </div>
                : null
            }*/}

        </div>
    )
}

export default ProfileShort;