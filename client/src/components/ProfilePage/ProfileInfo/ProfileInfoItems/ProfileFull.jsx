import React from "react";
import css from "./ProfileShortFull.module.css";

const ProfileFull = (props) => {

    const profile = props.profile;

    return (

        <div className={css.infoFullWrap}>

            <div className={css.ItmLabel}>
                <span>Образование</span>
                <div className={css.line}></div>
            </div>

            <div className={css.infoItm}>
                <div className={css.label}>Вуз:</div>
                <div className={css.labeled}>Нижегородский институт МГЭУ</div>
            </div>


        </div>
    )
}

export default ProfileFull;