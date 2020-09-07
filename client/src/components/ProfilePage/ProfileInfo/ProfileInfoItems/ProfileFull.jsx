import React from "react";
import css from "./ProfileShortFull.module.css";

const ProfileFull = (props) => {
    const info = props.info;

    return (
        <div className={css.infoFullWrap}>

            { (info.location.country.length > 0 || info.location.city.length > 0) &&
                <div className={css.ItmLabel}>
                    <span>Место жительства</span>
                    <div className={css.line}></div>
                </div>
            }

            {info.location.country.length > 0 &&
            <div className={css.infoItm}>
                <div className={css.label}>Страна:</div>
                <div className={css.labeled}>{info.location.country}</div>
            </div>
            }

            {info.location.city.length > 0 &&
            <div className={css.infoItm}>
                <div className={css.label}>Город:</div>
                <div className={css.labeled}>{info.location.city}</div>
            </div>
            }



            {(info.education.school.length > 0 || info.education.university.length > 0) &&
            <div className={css.ItmLabel}>
                <span>Образование</span>
                <div className={css.line}></div>
            </div>
            }

            {info.education.school.length > 0 &&
            <div className={css.infoItm}>
                <div className={css.label}>Школа:</div>
                <div className={css.labeled}>{info.education.school}</div>
            </div>
            }

            {info.education.university.length > 0 &&
                <div className={css.infoItm}>
                    <div className={css.label}>Вуз:</div>
                    <div className={css.labeled}>{info.education.university}</div>
                </div>
            }



            {(info.job.organisation.length > 0 || info.job.profession.length > 0) &&
                <div className={css.ItmLabel}>
                    <span>Карьера</span>
                    <div className={css.line}></div>
                </div>
            }

            {info.job.organisation.length > 0 &&
                <div className={css.infoItm}>
                    <div className={css.label}>Организация:</div>
                    <div className={css.labeled}>{info.job.organisation}</div>
                </div>
            }

            {info.job.profession.length > 0 &&
            <div className={css.infoItm}>
                <div className={css.label}>Должность:</div>
                <div className={css.labeled}>{info.job.profession}</div>
            </div>
            }



            {info.gender &&
                <div className={css.ItmLabel}>
                    <span>Пол</span>
                    <div className={css.line}></div>
                </div>
            }

            {info.gender &&
                <div className={css.infoItm}>
                    <div className={css.label}>Пол:</div>
                    <div className={css.labeled}>{info.gender === 'male' ? 'Мужской' : 'Женский'}</div>
                </div>
            }

        </div>
    )
}

export default ProfileFull;